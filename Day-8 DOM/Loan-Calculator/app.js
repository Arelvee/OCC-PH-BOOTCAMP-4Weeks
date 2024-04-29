// Check if there are loans in Local Storage
let loans = JSON.parse(localStorage.getItem('loans')) || [];

// Hide container2 if there are no loans
if (loans.length === 0) {
    document.querySelector('.container2').style.display = 'none';
}

document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    let amount = document.getElementById('loanAmount').value;
    let interest = document.getElementById('interestRate').value;
    let years = document.getElementById('loanTerm').value;

    // Calculate loan
    let monthlyInterestRate = (interest / 100) / 12;
    let numberOfPayments = years * 12;
    let monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Save to Local Storage
    let loans = JSON.parse(localStorage.getItem('loans')) || [];
    loans.push({amount, interest, years, monthlyPayment});
    localStorage.setItem('loans', JSON.stringify(loans));

    // Display result
    document.getElementById('result').innerHTML = `Monthly Payment: ₱${monthlyPayment.toFixed(2)}`;

    // Display loans from Local Storage
    let loansContainer = document.createElement('div');
    loans.forEach((loan, index) => {
        let loanCard = document.createElement('div');
        loanCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Loan ${index + 1}</h5>
                    <p class="card-text">Amount: ₱${formatCurrency(loan.amount)} <br> Interest: ${loan.interest}% <br> Term: ${loan.years} years <br> Monthly Payment: ₱${formatCurrency(loan.monthlyPayment.toFixed(2))}</p>
                    <i class="fas fa-check"></i>
                    <i class="fas fa-trash" onclick="deleteLoan(${index})"></i>
                </div>
            </div>
        `;
        loansContainer.appendChild(loanCard);
    });

    // Display or hide container2 based on the presence of loans
    let container2 = document.querySelector('.container2');
    if (loans.length > 0) {
        container2.style.display = 'block';
    } else {
        container2.style.display = 'none';
    }
    container2.innerHTML = ''; // Clear container2 before appending new loans
    container2.appendChild(loansContainer);

});

function formatCurrency(amount) {
    // Format amount to have comma separators for thousands and add currency symbol
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

function deleteLoan(index) {
    let loans = JSON.parse(localStorage.getItem('loans'));
    loans.splice(index, 1);
    localStorage.setItem('loans', JSON.stringify(loans));

    // Remove the deleted loan card from the UI
    let container2 = document.querySelector('.container2');
    container2.innerHTML = ''; // Clear container2 before appending updated loans
    loans.forEach((loan, index) => {
        let loanCard = document.createElement('div');
        loanCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Loan ${index + 1}</h5>
                    <p class="card-text">Amount: ₱${formatCurrency(loan.amount)} <br> Interest: ${loan.interest}% <br> Term: ${loan.years} years <br> Monthly Payment: ₱${formatCurrency(loan.monthlyPayment.toFixed(2))}</p>
                    <i class="fas fa-check"></i>
                    <i class="fas fa-trash" onclick="deleteLoan(${index})"></i>
                </div>
            </div>
        `;
        container2.appendChild(loanCard);
    });

    // Hide container2 if there are no loans after deletion
    if (loans.length === 0) {
        container2.style.display = 'none';
    }
}

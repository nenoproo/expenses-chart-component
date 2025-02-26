let data = [];

async function fetchData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Failed to load JSON');
    data = await response.json();
    // console.log(data);
    updateChart();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function updateChart() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button, index) => {
    const priceDiv = button.querySelector('.day-price-label');
    priceDiv.classList.add('bg-darkBrown');

    priceDiv.textContent = `$${data[index].amount.toFixed(2)}`;

    const handleButtonAction = () => {
      document.querySelectorAll('.day-price-label').forEach((div) => {
        div.classList.add('hidden'); // скриј ги сите div price tags
      });

      priceDiv.classList.remove('hidden'); // прикажи го само тагот на кликнатото копче
    };
    // на секое копче "овозможи" му ги овие event listeners
    button.addEventListener('click', handleButtonAction);
    button.addEventListener('mouseover', handleButtonAction);
  });
}
fetchData();

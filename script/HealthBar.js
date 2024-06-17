// Funkce pro postupné změny hodnoty a barvy na progress baru
export function changeProgressValueAndColor(valueChange, interval) 
{
    var progressBar = document.getElementById('healthBar');
    var currentValue = parseInt(progressBar.value);

    var targetValue = Math.min(Math.max(currentValue + valueChange, 0), 100); // Omezení hodnoty na rozmezí 0 až 100
    if (targetValue == 0) window.location.href =  "ending-screen.html?outcome=lose";
    var timer = setInterval(function() 
    {
        if (currentValue === targetValue) 
        {
            clearInterval(timer);
            progressBar.value = targetValue;
        }
        else
        {
            // Změna hodnoty progress baru
            progressBar.value = currentValue;
            currentValue += valueChange > 0 ? 1 : -1; // Zvýšení nebo snížení hodnoty

            progressBar.classList.remove('healthBarRed', 'healthBarOrange', 'healthBarGreen');
            // Změna barvy progress baru
            if (currentValue <= 40) progressBar.classList.add("healthBarRed");          // Červená
            else if (currentValue <= 70) progressBar.classList.add('healthBarOrange');  // Oranžová
            else progressBar.classList.add('healthBarGreen');                           // Zelená (původní barva)
        }
    }, interval);
}

import { GetFromStorage, SetToStorage } from "./localStorage";
export function SethealthBarVal()
{
    var progressBar = document.getElementById('healthBar');
    progressBar.value = GetFromStorage("HP");
}

export function SaveHealthBarVal()
{
    var progressBar = document.getElementById('healthBar');
    SetToStorage("HP", progressBar.value);
}

// Přidání události na tlačítko pro postupné změny hodnoty a barvy na progress baru
/*document.getElementById('changeValueAndColorBtn').addEventListener('click', function() {
    changeProgressValueAndColor(-10, 50); // Odebere 10 jednotek hodnoty postupně s interval 50ms
});*/
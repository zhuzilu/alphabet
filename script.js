// Playing the sound each time you type a letter

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
});

// Dark mode 


document.querySelector('.dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    let moon = document.getElementById('moon').innerHTML;
    if (moon == "🌙")
    {
        document.getElementById('moon').innerHTML ='☀️';
    }else{
        document.getElementById('moon').innerHTML ='🌙';
    };
});


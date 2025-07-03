document.addEventListener('DOMContentLoaded', function() {
    function virarCartao(event) {
        const tag = event?.target?.tagName?.toLowerCase();
        if (tag === 'button' || tag === 'input' || tag === 'i' || tag === 'audio' || tag === 'label') {
            return;
        }
        document.getElementById('cartao').classList.toggle('virado');
    }

    document.querySelectorAll('.frente, .verso').forEach(el => {
        el.addEventListener('click', virarCartao);
    });

    
    const openCalendarioBtn = document.getElementById('openCalendarioBtn');
    const calendario = document.querySelector('.calendario');
    const calendarioInput = document.getElementById('calendarInput');

    if (openCalendarioBtn) {
        openCalendarioBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            calendario.style.display = calendario.style.display === 'block' ? 'none' : 'block';
        });
    }
    
});
document.addEventListener('DOMContentLoaded', function() {
    let jaTremeu = false;
    const xddBtn = document.querySelector('.xdd');
    if (xddBtn) {
        xddBtn.addEventListener('click', function() {
            if (!jaTremeu) {
                document.body.classList.add('shake');
                setTimeout(() =>{ document.body.classList.remove('shake'),
                alert('Tocou né kkkkkkkkk')}, 600);
                jaTremeu = true;
                
            }
        });
    }


});


var selector = document.getElementById('selector');
var contrainerQuotes = document.querySelector('.contrainer-quotes');

selector.addEventListener('change', function() {
    var selectedOption = selector.options[selector.selectedIndex];
    var selectedValue = selectedOption.value;
    if(selectedValue == 'emilkaK'){
        contrainerQuotes.innerHTML = ``;
    }
    switch(selectedValue){
        case 'emiliaK':
            contrainerQuotes.innerHTML = `
            <h1>Cytaty Dżemilki podczas pracy w Starej Szwajcarii</h1>
            
            <div class="card col-sm-8 col-md-5 col-lg-5">
                <h4>❞He?❝(nie słyszy)</h4>
                <h6>~ Emilka</h6>
            </div>
            <div class="card col-sm-8 col-md-5 col-lg-5">
                <h4>❞Hy?❝(nie słyszy)</h4>
                <h6>~ Emilka</h6>
            </div>
            <div class="card col-sm-8 col-md-5 col-lg-5">
                <h4>❞Ha?❝(nie słyszy)</h4>
                <h6>~ Emilka</h6>
            </div>

            `;
            break;
            case 'ewelinaB':
                contrainerQuotes.innerHTML = `
                <h1>Cytaty Eweliny podczas pracy w Starej Szwajcarii</h1>
                
                <div class="card col-sm-8 col-md-5 col-lg-5">
                    <h4>❞Siki Weroniki❝</h4>
                    <h6>~ Ewelina</h6>
                </div>
                <div class="card col-sm-8 col-md-5 col-lg-5">
                    <h4>❞Masz łeb jak (wszystko tu może być)❝</h4>
                    <h6>~ Ewelina</h6>
                </div>
                <div class="card col-sm-8 col-md-5 col-lg-5">
                    <h4>❞Tłusto gęś❝</h4>
                    <h6>~ Ewelina</h6>
                </div>
                <div class="card col-sm-8 col-md-5 col-lg-5">
                    <h4>❞Jak będą szwedy❝</h4>
                    <h6>~ Ewelina</h6>
                </div>
                <div class="card col-sm-8 col-md-5 col-lg-5">
                    <h4>❞Dla misia gogo❝</h4>
                    <h6>~ Ewelina</h6>
                </div>
                <div class="card col-sm-8 col-md-5 col-lg-5">
                    <h4>❞Możesz wyjść z osiedla, ale osiedle nie wyjdzie z ciebie❝</h4>
                    <h6>~ Ewelina</h6>
                </div>
                `;
                break;
                case 'arturO':
                    contrainerQuotes.innerHTML = `
                    <h1>Cytaty Artura podczas pracy w Starej Szwajcarii</h1>
                    <div class="card">-</div>
                    `;
                    break;
    }
});
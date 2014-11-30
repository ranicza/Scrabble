var scoring = (function(word){
    word = word.toUpperCase().split('');
    var score = {'A': 1,'E': 1,'I': 1, 'O': 1,'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1,'T': 1,
        'D': 2, 'G': 2,
        'B': 3, 'C': 3, 'M': 3, 'P': 3,
        'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
        'K': 5,
        'J': 8, 'X': 8,
        'Q': 10, 'Z': 10}
    var counter = 0;
    for (var i = 0; i < word.length; ++i) {
        counter += score[word[i]] || 0;
    }
    return counter;
});
$(document).ready(function() {
    $("form#scrabble-form").submit(function(event) {
        var word = $('#word').val();
        if(word == null || word.length < 1){
            alert("Введите слово!");

        } else if(word.match(/\d+/g) != null) {
            alert("Введите слово!");
        }else {
            var result = scoring(word);
            $('#quote').append("Your score is : " +result);
            $('#btn-click').hide();
            $('#btn-again').show();

            $("#btn-again").click(function (event) {
                counter = 0;
                $('#quote').empty();
                location.reload();
            });
            event.preventDefault();
        }
    });
});



import VoteButton from '../images/vote_button.jpg';

(function () {
    var buttonHolder = document.getElementById('buttonHolder');
    var buttonImage = new Image();
    buttonImage.src = VoteButton;
    buttonHolder.appendChild(buttonImage);
})();
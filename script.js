'use strict';

function userInput() {
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    let input = $(e.currentTarget).find('#shopping-list-entry').val();
    let html = `      <li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
    $('.shopping-list').append(html);
  })
  $('.shopping-list').on('click', '.shopping-item-toggle', e=>{
    $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')});
  $('.shopping-list').on('click', '.shopping-item-delete', e=>{
      $(e.target).closest('li').remove()});
}












$(userInput);
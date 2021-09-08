$(document).ready(function(){
    $('form.choose').on('click', function(e) {
        // e.preventDefault()
        // получаем выбранные значения из формы для вида перевозки
        var choosen = $('input[name=t-check]:checked', '.choose').val()
        // показываем определенные формы
        $('.wrapper-forms').show()
        $('.types').show()
        $('.views').show()
        $('.calc-result').hide()
        $('.purposes').show()
        $('.classes').show()
        $('#class-4_1').show()
        $('#class-4_2').show()
        $('#class-4_3').show()
        $('#class-5_1').show()
        $('#class-6_1').show()
        $('#class-8').show()
        $('#class-9').show()
        $('.survey').show()
        $('.manufacturer').show()
        $('#sbmt-button').show()
        $('#reset-btn').show()
        // проверяем выбранное значение и какие элементы формы вывести на экран
        if('v-cistern' == choosen){
              $('#ut-vehicle, #uv-van, #uv-semi-trailer, '
                +'#uv-trailer, .categories, #class-1, label[for="class-1"], #class-5_2, label[for="class-5_2"], '
                +'#class-6_2, label[for="class-6_2"], #class-7, label[for="class-7"]').hide()
              $('#ut-cistern, #uv-machanical, #uv-semi-cistern, '
                +'#uv-cistern, #uv-memu, .materials, #class-2, label[for="class-2"], '
                +'#class-3, label[for="class-3"]').show()
                clickedButton()
        } else if('v-in-bulk' == choosen){            
              $('#ut-cistern, #uv-van, #uv-semi-cistern, #uv-cistern, '
                +'#uv-memu, .materials, .categories, #class-1, label[for="class-1"], '
                +'#class-2, label[for="class-2"], #class-3, label[for="class-3"], #class-5_2, label[for="class-5_2"], '
                +'#class-7, label[for="class-7"]').hide()
              $('#ut-vehicle, #uv-machanical, #uv-semi-trailer, #uv-trailer, #class-6_2, label[for="class-6_2"], '
                +'').show()
                clickedButton()
        } else if('v-in-package' == choosen){
              $('#ut-cistern, #uv-machanical, #uv-semi-cistern, #uv-cistern, '
                +'#uv-memu, .materials').hide()
              $('#ut-vehicle, #uv-van, #uv-semi-trailer, #uv-trailer, .categories, '
                +'#class-1, label[for="class-1"], #class-2, label[for="class-2"], #class-3, label[for="class-3"], '
                +'#class-5_2, label[for="class-5_2"], #class-6_2, label[for="class-6_2"], #class-7, label[for="class-7"]').show()
                clickedButton()
        }        
        // получаем отмеченные значения из формы каждой отдельной перевозки
        function clickedButton(){        
          $('form.wrapper-forms #sbmt-button').click(function(e){
            e.preventDefault()            
            // создаем переменную для хранения и вычисления коэффициента
            var summ = 1;     
            // получаем отмеченные checkbox и умножаем значение коэффициента
            $('input[type=checkbox]:checked').each(function(){
              var input = $(this).val()
              summ *= parseFloat(input)
            })            
            // получаем отмеченные selected листы и умножаем значение коэффициента
            $('form.wrapper-forms :selected').each(function(){
              var input = $(this).val()
              summ *= parseFloat(input)
            })
            // выводим результат вычисления на экран
            $('#calc-result').text('Ваша сумма: ' + parseInt(summ*3000))
            $('#calc-result').show()
          })
        }  
    })
})
function resetBtn() {
  $('.wrapper-forms').hide()
  $('#calc-result').hide()
  $("input:radio[name='t-check']").each(function(i) {
    this.checked = false;
  });
}
$(() => {
  const formatPhoneNumber = numStr => `(${numStr.slice(0, 3)})-${numStr.slice(3, 6)}-${numStr.slice(6)}`;

  $('#bsc').on('click', () => {
    console.log('oh boy');
  });
  $('#bsc').colorpicker({
    color: '#25aabd'
  }).on('changeColor', (e) => {
    const hsl = e.color.toHSL();
    const number = hsl.h * hsl.s * hsl.l * Math.pow(10, 12) % Math.pow(10, 10);
    let numStr = Math.floor(number).toString();
    while (numStr.length < 10) {
      numStr = `0${numStr}`;
    }
    $('#pn').text(formatPhoneNumber(numStr));
  });
});

$(() => {
  const pad = (num, length) => {
    let numStr = num.toString();
    while (numStr.length < length) {
      numStr = `0${numStr}`;
    }
    return numStr;
  };

  const shadeToNumber = (shade, length) => pad(Math.floor((shade / 256) * 10 ** length + 1) % (10 ** length), length);

  $('#bsc').on('click', () => {
    console.log('oh boy');
  });
  $('#bsc').colorpicker({
    color: '#25aabd',
  }).on('changeColor', (e) => {
    const color = e.color.toRGB();
    const areaCode = shadeToNumber(color.r, 3);
    const regionCode = shadeToNumber(color.g, 3);
    const localCode = shadeToNumber(color.b, 4);
    $('#pn').text(`(${areaCode})-${regionCode}-${localCode}`);
  });
});

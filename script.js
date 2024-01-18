// Bagian 1: Luas Persegi
function hitungLuas() {
    var sisiLuas = parseFloat(document.getElementById('sisiLuas').value);
    var luas = sisiLuas * sisiLuas;
    document.getElementById('hasilLuas').innerHTML = 'Hasil: ' + luas;
    document.getElementById('langkahLuas').innerHTML = 'Luas = sisi x sisi = ' + sisiLuas + ' x ' + sisiLuas + ' = ' + luas;
}
  
  function resetLuas() {
    document.getElementById('sisiLuas').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
    document.getElementById('langkahLuas').innerHTML = '';
  }
  
  // Bagian 2: Keliling Persegi
  function hitungKeliling() {
    var sisiKeliling = parseFloat(document.getElementById('sisiKeliling').value);
    var keliling = 4 * sisiKeliling;
    document.getElementById('hasilKeliling').innerHTML = 'Hasil: ' + keliling;
    document.getElementById('langkahKeliling').innerHTML = 'Keliling = 4 x sisi = 4 x ' + sisiKeliling + ' = ' + keliling;
}
  
  function resetKeliling() {
    document.getElementById('sisiKeliling').value = '';
    document.getElementById('hasilKeliling').innerHTML = '';
    document.getElementById('langkahKeliling').innerHTML = '';
  }
  
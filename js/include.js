$(function() {
  $.ajax({
    url: 'C:\\Users\\user074-dps\\Documents\\mock\\header.html', // include�������t�@�C���̃p�X���w��
    dataType: 'html', // html�̂܂�
    // �ǂݍ��ݐ������̏���
    success: function (data) {
      $('body').prepend(data);
    },
    // �ǂݍ��ݎ��s���̏���
    error: function () {
      alert('header error!');
    },
  });
});
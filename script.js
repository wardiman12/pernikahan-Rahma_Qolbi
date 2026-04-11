function openLink2(url) {
  window.location.href = url;
}
$(document).ready(function () {
  $("#data-pernikahan-form").submit(function () {
    // Disable the submit button to prevent double-click
    $("#btn-id-buat-re").prop("disabled", true);

    // Optionally, you can re-enable the button after a delay
    setTimeout(function () {
      $("#btn-id-buat-re").prop("disabled", false);
    }, 5000); // 5000 milliseconds (adjust as needed)

    window.dataLayer.push({
      event: "buat_acara_baru_re",
      // 'jenis_acara': acara,
      // 'date_acara': date
    });

    return true;
  });
  setTimeout(function () {
    anime({
      targets: "#kucing_imut",
      opacity: 0,
      duration: 1000,
    });
    setTimeout(function () {
      $("#kucing_imut").hide();
    }, 1000);
  }, 2000);
  var cekUcapan = localStorage.getItem("isiUcapan");
  if (cekUcapan) {
    $("#img-kado-buka").show();
  }
  // validasi max 10 input peserta
  $("#jumlah_datang_id").on("blur", function () {
    var value = parseInt($(this).val());

    if (isNaN(value) || value < 0 || value > 10) {
      // alert("Please enter a valid integer between 0 and 10.");
      $(this).val("");
      $("#alert_data_ucapan").text("Maksimal jumlah hadir adalah 10 orang");
    } else {
      $("#alert_data_ucapan").text("");
    }
  });
  var myParam = location.search.split("kpd=")[1];
  $("#konfir_nama").val(myParam);
  // console.log(myParam);
  $("#notif_wa").hide();
  localStorage.setItem("1952", true);
  localStorage.setItem("nama", myParam);
  var cekNama = localStorage.getItem("1952-nama");
  if (cekNama == "undefined" || cekNama == "" || cekNama == null) {
    $("#qrcode_id").hide();
    if (cekNama != myParam) {
      localStorage.setItem("1952-nama", myParam);
    }
  } else {
    $("#qrcode_id").show();
  }

  setInterval(function () {
    animUcapan();
  }, 6000);

  setTimeout(function () {
    loadUcapan();
  }, 3000);
  anime({
    targets: ".flower-anim",
    rotate: {
      value: 30,
      duration: 3000,
      easing: "easeInOutSine",
    },
    scale: 1.5,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
  });

  // $('a[href^="http"]').attr('target','_blank');
});

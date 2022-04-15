$(document).ready(function() {

    $("#pulsa").click(function() {
        $("#pulsa").css("border-bottom", "2px solid #03ac0e");
        $("#pulsa").css("color", "#03ac0e");
        $("#paket-data").css("padding", "10px 0");
        $("#paket-data").css("color", "black");
        $("#paket-data").css("border-bottom", "2px solid transparent");
        $(".nominalpls").show();
        $(".btn-beli1").show();
        $(".nominalpaket").hide();
        $(".btn-beli2").hide();
    });

    $("#paket-data").click(function() {
        $("#paket-data").css("border-bottom", "2px solid #03ac0e");
        $("#paket-data").css("color", "#03ac0e");
        $("#pulsa").css("padding", "10px 0");
        $("#pulsa").css("color", "black");
        $("#pulsa").css("border-bottom", "2px solid transparent");
        $(".nominalpls").hide();
        $(".btn-beli1").hide();
        $(".nominalpaket").prop("hidden", false);
        $(".nominalpaket").show();
        $(".btn-beli2").prop("hidden", false);
        $(".btn-beli2").show();
    });

    $(".nomor-hp").change(function() {
        if ($(".nomor-hp").val() > 1) {
            $(".nominalpls").prop("disabled", false);
            $(".nominalpaket").prop("disabled", false);
        } else {
            $(".nominalpls").prop("disabled", true);
            $(".btn-beli1").prop("disabled", true);
            $(".btn-beli1").css('background-color', '#4950572e');
            $(".nominalpaket").prop("disabled", true);
            $(".btn-beli2").prop("disabled", true);
            $(".btn-beli2").css('background-color', '#4950572e');
            document.getElementById(".nominalpls").value = "Pilih";
            document.getElementById(".nominalpaket").value = "Pilih";
        }
    });

    $(".nomor-hp").keypress(function(value) {
        if (value.which != 8 && value.which != 0 && (value.which < 48 || value.which > 57)) {
            return false;
        }
    });

    $(".nominalpls").change(function() {
        $(".btn-beli1").prop("disabled", false);
        $(".btn-beli1").css('background-color', '#fa591d');
        $(".btn-beli1").css('color', 'white');
    });

    $(".nominalpaket").change(function() {
        $(".btn-beli2").prop("disabled", false);
        $(".btn-beli2").css('background-color', '#fa591d');
        $(".btn-beli2").css('color', 'white');
    });

    $(".btn-beli1").click(function() {
        const pilihanItem = $(".nominalpls").children("option:selected").text();
        if (pilihanItem === "Pilih") {
            alert("Pilihan error karna pilihan tidak sesuai! Coba diubah kembali!");
        } else {
            var harga = pilihanItem.substring(4);
            var str = "";
            str = harga === "1.000" ? "Rp. 4.000" : str;
            str = harga === "3.000" ? "Rp. 6.000" : str;
            str = harga === "5.000" ? "Rp. 8.000" : str;
            str = harga === "10.000" ? "Rp. 12.000" : str;
            str = harga === "20.000" ? "Rp. 22.000" : str;
            str = harga === "25.000" ? "Rp. 27.000" : str;
            str = harga === "50.000" ? "Rp. 52.000" : str;
            str = harga === "100.000" ? "Rp. 102.000" : str;
            let verif = confirm("Pembelian pulsa sebesar " + pilihanItem + " ke nomor " + $(".nomor-hp").val());
            if (verif) {
                alert("Total harga pulsa " + str + ",- ke nomor " + $(".nomor-hp").val() + " sedang di proses. Terima kasih :)");
            } else {

            }
        }
    });

    $(".btn-beli2").click(function() {
        const pilihanItem = $(".nominalpaket").children("option:selected").text();
        if (pilihanItem === "Pilih") {
            alert("Pilihan error karna pilihan tidak sesuai! Coba diubah kembali!");
        } else {
            let harga = pilihanItem.substring(pilihanItem.length - 10);
            let verif = confirm("Pembelian paket data " + pilihanItem + " ke nomor " + $(".nomor-hp").val());
            if (verif) {
                alert("Total harga paket data " + harga + ",- ke nomor " + $(".nomor-hp").val() + " sedang di proses. Terima kasih :)");
            } else {

            }
        }
    });

});
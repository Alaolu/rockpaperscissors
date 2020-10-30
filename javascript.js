
//Rakip belirlendiğinde alttındaki yazıyı değiştiren bir fonsiyon!!....
function rakipsecildi(){
    if(document.getElementById("rakipler").value == "görkem"){
    document.getElementById("rakipsözü").innerHTML = ("KANKA BENİ SEÇME YA SELİNLE KONUSUYORUM:))");
    }
    else if(document.getElementById("rakipler").value == "cihan"){
    document.getElementById("rakipsözü").innerHTML = ("YA OLUM SEN MALMISIN?? YİYOSA PABCİDE GEL!!");
    }
    else if(document.getElementById("rakipler").value == "cagrı"){
    document.getElementById("rakipsözü").innerHTML = ("YARIM SAATE GELİYORUM SEN OYNAYA BAS BEKLE");
    }
    else if(document.getElementById("rakipler").value == "alikaan"){
    document.getElementById("rakipsözü").innerHTML = ("OZAN ABİM OLSAYDI GÖRÜRDÜN SEN!!");
    }
    else if(document.getElementById("rakipler").value == "ömer"){
    document.getElementById("rakipsözü").innerHTML = ("SKTR ET BUNU GEL FM OYNAYAK");
    }
    else if(document.getElementById("rakipler").value == "batu"){
    document.getElementById("rakipsözü").innerHTML = ("KANKA BEN ÇIKICAM YA NAZ ARIYO..");
    }
    else if(document.getElementById("rakipler").value == "riyad"){
     document.getElementById("rakipsözü").innerHTML = ("ULA BABO OYUNDAN SONRA BI NARGILE YAPAK");
    }
    else if(document.getElementById("rakipler").value == "hilmi"){
     document.getElementById("rakipsözü").innerHTML = ("SEKSİ HİLMİYİ SEÇEREK BÜYÜK HATA YAPTIN YAKISIKLI");
    }
    else {
     document.getElementById("rakipsözü").innerHTML = ("Lütfen Bir Rakip Seçiniz!");
    
    }
}

 //Rakip belirlendiğinde alttındaki yazıyı değiştiren bir fonsiyon!!....


 //Nickname seçme yerindeki ayarlamaların yapıldıgı fonksiyonlar!!..

 function nicknametıklama(){
     document.getElementById("nickname").placeholder = "lütfen en az 3 karakter!"
 };
 function nicknameblur(){
     document.getElementById("nickname").placeholder = "--Nickname--"
 }

 function nicknameonchange(){
     let nicknamevalue = document.getElementById("nickname").value;
     let nicknamelength = nicknamevalue.length;
     if(nicknamelength < 3){
        document.getElementById("uyarı").innerHTML = ("Lütfen 2 Karakterden Fazla Giriniz!!");
        document.getElementById("uyarı").style.color = "brown" ;
     }
     else if (nicknamelength > 12){
         document.getElementById("uyarı").innerHTML = ("Lütfen 13 Karakterden Daha Az Giriniz!!");
         document.getElementById("uyarı").style.color = "brown" ;
     }
     else {document.getElementById("uyarı").innerHTML = ("✓")
     document.getElementById("uyarı").style.color = "lime"};
     return;
     
 }

 //Nickname seçme yerindeki ayarlamaların yapıldıgı fonksiyonlar!!.. 

 //HAZIR Tuşu Ayarları Burda Yapıldı, Nickname ve ComputerName Aktarımları Yapıldı.... EKSTA OLARAK = FOTOGRAFLAR SEÇİME GÖRE GÜNCELLEDNDİ!!..
 function hazırtusutiklama(){
    rakipsecildi();
    nicknametıklama();
    nicknameblur();
    nicknameonchange();

    
    if(document.getElementById("oyna").innerHTML === ("OYNA")){
        document.getElementById("ilksayfa").style.display = ("none");
        document.getElementById("ikincisayfa").style.display = ("block");
        let playername = document.getElementById("nickname").value;
        document.getElementById("soltarafnicknamee").innerHTML = playername;
        let computername = document.getElementById("rakipler").value;
        document.getElementById("comnamee").innerHTML = computername;


        if(computername == "görkem"){
            document.getElementById("comlogoo").style.backgroundImage = "url('görkemlogo.jpeg')";
        }
        if(computername == "cihan"){
            document.getElementById("comlogoo").style.backgroundImage = "url('cihanlogo.jpeg')";
        }if(computername == "cagrı"){
            document.getElementById("comlogoo").style.backgroundImage = "url('cagrılogo.jpeg')";
        }if(computername == "alikaan"){
            document.getElementById("comlogoo").style.backgroundImage = "url('alilogo.jpeg')";
        }if(computername == "ömer"){
            document.getElementById("comlogoo").style.backgroundImage = "url('ömerlogo.jpeg')";
        }if(computername == "batu"){
            document.getElementById("comlogoo").style.backgroundImage = "url('batulogo.jpeg')";
        }if(computername == "riyad"){
            document.getElementById("comlogoo").style.backgroundImage = "url('riyadlogo.jpeg')";
        }if(computername == "hilmi"){
            document.getElementById("comlogoo").style.backgroundImage = "url('hilmilogo.jpeg')";
        }

        if(document.getElementById("ikincisayfa").style.display == ("block")){
            alert("Simdi tek yapman gereken neyi seçecegine karar vermek! \nTas mı? \nKagıt mı? \nMakas mı?");
         }

    }

    if((document.getElementById("uyarı").innerHTML == ("✓")) && (document.getElementById("rakipsözü").innerHTML != ("Lütfen Bir Rakip Seçiniz!"))){
        document.getElementById("oyna").innerHTML = ("OYNA");
        document.getElementById("nickname").disabled = true ;
        document.getElementById("rakipler").disabled = true ;   
    }
    else {alert("Lütfen Kurallara Uygun Nickname Belirttiğinizden ve Rakip Seçtiğinizden Emin Olun!");}

 }

//HAZIR Tuşu Ayarları Burda Yapıldı, Nickname ve ComputerName Aktarımları Yapıldı.... EKSTA OLARAK = FOTOGRAFLAR SEÇİME GÖRE GÜNCELLEDNDİ!!..




function tassecimi(){
    let comchose = Math.floor(Math.random()*3);

    if(comchose == 0){
        document.getElementById("comchosee").style.backgroundImage = "url('rocklogo.png')";
        alert("RAKİP: Hadi Yine İyisin, Ucuz Kurtuldun!!");
    }
    else if (comchose == 1){
        document.getElementById("comchosee").style.backgroundImage = "url('paperlogo.png')";
        alert("RAKİP: HAHAHAHAHHA TAŞ SEÇECEGİNİ BİLİYODUM:)");
        document.getElementById("comscoree").innerHTML += "x";
    }
    else if (comchose == 2){
        document.getElementById("comchosee").style.backgroundImage = "url('scissorslogo.png')";
        alert("RAKİP: Bunu Düşünmemiştim..");
        document.getElementById("benimscoree").innerHTML += "x";
    }
        if (document.getElementById("benimscoree").innerHTML == "xxxxx"){
            alert("RAKİP: Lanet oyun tamamen ŞANS! ");
            document.getElementById("rockbtn").disabled = true ;
            document.getElementById("paperbtn").disabled = true ;
            document.getElementById("scissorsbtn").disabled = true;
            document.getElementById("tekrarbtn").style.display = "inline-block";
            document.getElementById("anasayfabtn").style.display = "inline-block";
        }
        if (document.getElementById("comscoree").innerHTML == "xxxxx"){
            alert("RAKİP: Öğrenince ara beni , yine oynarız:)) ");
            document.getElementById("rockbtn").disabled = true ;
            document.getElementById("paperbtn").disabled = true ;
            document.getElementById("scissorsbtn").disabled = true;
            document.getElementById("tekrarbtn").style.display = "inline-block";
            document.getElementById("anasayfabtn").style.display = "inline-block";
        }
    
}

function kagıtsecimi(){
    let comchose1 = Math.floor(Math.random()*3);
    
    if(comchose1 == 0){
        document.getElementById("comchosee").style.backgroundImage = "url('rocklogo.png')";
        alert("RAKİP: SAKİN OL ŞAMPİYON...");
        document.getElementById("benimscoree").innerHTML += "x";
    }

    else if (comchose1 == 1){
        document.getElementById("comchosee").style.backgroundImage = "url('paperlogo.png')";
        alert("RAKİP: Tam Makası Seçiyordum Seni Şanslı!");
    }
    else if (comchose1 == 2){
        document.getElementById("comchosee").style.backgroundImage = "url('scissorslogo.png')";
        alert("RAKİP: AGLA!")
        document.getElementById("comscoree").innerHTML += "x";
    }
    if (document.getElementById("benimscoree").innerHTML == "xxxxx"){
        alert("RAKİP: Lanet oyun tamamen ŞANS! ");
        document.getElementById("rockbtn").disabled = true ;
        document.getElementById("paperbtn").disabled = true ;
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("tekrarbtn").style.display = "inline-block";
        document.getElementById("anasayfabtn").style.display = "inline-block";
    }
    if (document.getElementById("comscoree").innerHTML == "xxxxx"){
        alert("RAKİP: Öğrenince ara beni , yine oynarız:)) ");
        document.getElementById("rockbtn").disabled = true ;
        document.getElementById("paperbtn").disabled = true ;
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("tekrarbtn").style.display = "inline-block";
        document.getElementById("anasayfabtn").style.display = "inline-block";
    }

}

function makassecimi(){
    let comchose2 = Math.floor(Math.random()*3);

    if(comchose2 == 0){
        document.getElementById("comchosee").style.backgroundImage = "url('rocklogo.png')";
        alert("RAKİP: Ezildin Çık!");
        document.getElementById("comscoree").innerHTML += "x";
    }

    else if (comchose2 == 1){
        document.getElementById("comchosee").style.backgroundImage = "url('paperlogo.png')";
        alert("RAKİP: Çok Şanslısın..");
        document.getElementById("benimscoree").innerHTML += "x";
    }
    else if (comchose2 == 2){
        document.getElementById("comchosee").style.backgroundImage = "url('scissorslogo.png')";
        alert("RAKİP: Seçme Şu Makası!")
    }
    if (document.getElementById("benimscoree").innerHTML == "xxxxx"){
        alert("RAKİP: Lanet oyun tamamen ŞANS! ");
        document.getElementById("rockbtn").disabled = true ;
        document.getElementById("paperbtn").disabled = true ;
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("tekrarbtn").style.display = "inline-block";
        document.getElementById("anasayfabtn").style.display = "inline-block";
    }
    if (document.getElementById("comscoree").innerHTML == "xxxxx"){
        alert("RAKİP: Öğrenince ara beni , yine oynarız:)) ");
        document.getElementById("rockbtn").disabled = true ;
        document.getElementById("paperbtn").disabled = true ;
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("tekrarbtn").style.display = "inline-block";
        document.getElementById("anasayfabtn").style.display = "inline-block";
    }

    
}

function tekrarbasla(){
    document.getElementById("benimscoree").innerHTML = "";
    document.getElementById("comscoree").innerHTML = "";
    document.getElementById("rockbtn").disabled = false ;
    document.getElementById("paperbtn").disabled = false ;
    document.getElementById("scissorsbtn").disabled = false;
    document.getElementById("tekrarbtn").style.display = "none";
    document.getElementById("anasayfabtn").style.display = "none";
}






















    

 

 

 
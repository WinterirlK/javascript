<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Produkt</p><input type="text" id="nazwa">
     <p>Cena</p> <input type="number" id="cena"><br>
     <p>ilosc</p> <input type="number" id="ilosc"><br>
     <input type="button" onclick="funkcja()"value="dodaj"><br>

    <ul id="lista">

        
    </ul>
    <p id="wynik"></p><br>
    <p id="najw"></p>
    <script>
        let suma = 0;
        var tablica = [];
        var i = 0;
        var lol = 0;
        var basic = 1;
        function funkcja(){
            let ilosc = document.getElementById("ilosc").value;
            let produkt = document.getElementById("nazwa").value;
            let cena = parseFloat(document.getElementById("cena").value);
            cena = cena * ilosc;
            tablica.push(cena);
            i++;
            
            
            document.getElementById("lista").innerHTML += "<li> "+"ilosc:"+ilosc+" | "+"nazwa produktu: "+produkt+" | "+" cena: "+cena+"zł </li>";

            suma = suma + cena;
            tablica = tablica.sort();
            document.getElementById("wynik").innerHTML = "wynik: "+suma+"zł";
            document.getElementById("najw").innerHTML = "";
            document.getElementById("najw").innerHTML += " największa cena: "+produkt+" "+tablica[i-1]+"zł<br>";
            
            
            
            
            

        }

    </script>
</body>
</html>

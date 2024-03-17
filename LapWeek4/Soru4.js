classDiagram
    class Kullanici {
        -String kullaniciId
        -String kullaniciAdi
        -String email
        -String sifre
        +kullaniciIdGoster(): String
        +kullaniciAdiGoster(): String
        +emailGoster(): String
        +sifreAyarla(String): void
        +oturumAc(): void
        +oturumKapat(): void
    }

    class Egitmen {
        -List~Kurs~ verilenKurslar
        +kursOlustur(String): void
        +icerikEkle(Kurs, Icerik): void
        +odevNotlandir(Asssignment, Not): void
    }

    class Ogrenci {
        -List~Kurs~ alinanKurslar
        -List~Odev~ tamamlananOdevler
        +kayit(Course): void
        +odevGonder(Odev): void
        +notIncele(): List~Not~
    }

    class Kurs {
        -String kursId
        -String kursAdi
        -Egitmen egitmen
        -List~Ogrenci~ kayitliOgrenciler
        -List~Icerik~ kursIcerik
        +kursIdGoster(): String
        +kursAdiGoster(): String
        +egitmenGoster(): Egitmen
        +kayitliOgrenciGoster(): List~Ogrenci~
        +icerikGoster(): List~Icerik~
        +ogrenciEkle(Ogrenci): void
        +icerikEkle(Icerik): void
    }

    class Odev {
        -String odevId
        -String odevAdi
        -Kurs kurs
        -SonTarih sonTarih
        +odevIdGoster(): String
        +odevAdiGoster(): String
        +kursGoster(): Kurs
        +sonTarihGoster(): SonTarih
    }

    class Gonderim {
        -String gonderimId
        -Ogrenci ogrenci
        -Odev odev
        -Date gonderimTarih
        -String icerik
        -Not not
        +gonderimIdGoster(): String
        +ogrenciGoster(): Ogrenci
        +odevGoster(): Odev
        +gonderimTarihGoster(): Date
        +icerikGoster(): String
        +notGoster(): Not
        +notAyarla(Not): void
    }

    class Icerik {
        -String icerikId
        -String icerikBaslik
        -String icerikTanim
        -Kurs kurs
        +icerikIdGoster(): String
        +icerikBaslikGoster(): String
        +icerikTanimGoster(): String
        +kursGoster(): Kurs
    }

    class Not {
        -String notId
        -double puan
        -String geriDonus
        +notIdGoster(): String
        +puanGoster(): double
        +geriDonusGoster(): String
        +geriDonusAyarla(String): void
    }

    Kullanici <|-- Egitmen
    Kullanici <|-- Ogrenci
    Egitmen "1" -- "*" Kurs : verilenKurslar
    Kurs "1" -- "*" Ogrenci : kayitliOgrenciler
    Kurs "1" -- "*" Icerik : kursIcerik
    Odev "1" -- "*" Gonderim
    Ogrenci "1" -- "*" Gonderim : gonderimler
    Gonderim "1" -- "1" Not

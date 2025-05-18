---
title: "Guide Installation Arch Linux (Panduan Install Arch Linux)"
datePublished: Thu Dec 19 2024 14:20:28 GMT+0000 (Coordinated Universal Time)
cuid: cm4vescsb001509mkcaszeupc
slug: archlinux-installation
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1734576959828/3ed035a5-0d48-4afe-82d3-6e9975e33374.png
tags: linux, archlinux

---

# Kenapa harus Arch Linux?

Arch linux mempertahankan prinsip “KISS“ (Keep It Simple,Stupid), hanya menyertakan modifikasi minimal pada perangkat lunak untuk memastikan kompabilitas tanpa menambahkan fitur yang tidak perlu.Konfigurasi sistem diserahkan sepenuhnya kepada pengguna ,tanpa otomisasi berlebihan,seperti menyalakan service secara default setelah instalasi.

Sistem *rolling release* memastikan perangkat lunak selalu diperbarui ke versi terbaru yang stabil. Mendukung teknologi modern seperti **systemd,LVM2,RAID,udev,initcpio,**dan kernel terbaru.

Pendekatan pragmatis dalam pemilihan perangkat lunak,menawarkan perangkat lunak terbuka maupun tertutup sesua kebutuhan pengguna, bukan berdasarkan idealisme semata.

Ditujukan untuk pengguna yang mandiri, yang bersedia membaca dokumentasi dan menyelesaikan masalah secara proaktif.

Instalasi minimalis dengan command-line memungkinkan pengguna membangun sistem yang sepenuhnya terkustomisasi sesuai kebutuhan.Menyediakan **AUR (Arch User Respoitory)** untuk memudahkan pemasangan perangkat lunak yang tidak tersedia di repository resmi.

# Installation

## Partition

Untuk partisi disknya menggunakan fdisk.

Gunakan command ini untuk melihat semua disk dan partisi yang ada di sistem:

```apache
fdisk -l
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734581390998/41482594-d755-48e2-bbf9-dd4bad312f57.png align="left")

`Tip : ketika kita mempunyai sebuah ssd maka label partisinya biasanya /dev/nvme0n1 ,sedangkan hdd biasanya labelnya /dev/sdaX.`

Selanjutnya,pilih disk yang ingin kita format dan mempartisinya:

```apache
fdisk /dev/sda
```

Disini kita disarankan untuk menghapus partisi yang ada pada disk dengan perintah **d** ,Setelah seluruh disk sudah dihapus kita membuat partisi baru dengan perintah **n** .

## Membuat Partisi ESP (Untuk sistem UEFI )

Kita harus cek dulu apakah sistem kita memakai UEFI atau tidak ,dengan menggunakan command ini .

```bash
ls /sys/firmware/efi/efivars
```

Jika direktory tersebut ada maka kita harus membuat partisi partisi EFI di awal disk,jika direktory tersebut tidak ada maka langkah ini opsional/lewati saja.

Ketika membuat partisi baru ,ketik **n** : membuat partisi baru,lalu kita keti **p /enter** untuk partition defaultnya/primary ,lalu akan diminta untuk memilih nomor disk ,kita **enter** untuk default saja yaitu 1 .Ketika menentukan First Sector tekan enter untuk megkosongkan,untuk Last Sector kita berikan dengan ukuran **+1024M** atau 1GiB.

`Tip : First Sector harus ditentukan secara absolute dengan menggunakan nomor sektor ,namun kita tekan enter karena kita hanya setting bagian Last Sectornya dengan ,adapun nomor sektor atau sebagai posisi yang diukur dalam kibibyte (K), mebibyte (M), gibibyte (G), tebibyte (T), atau pebibyte (P).`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734582542956/4c131309-549f-4d1d-ac61-24a89035510a.png align="left")

Satu langkah penting yaitu mengubah jenis partisi EFI partition menjadi EFI System(Instead of Linux system).

Kita ketik **t** untuk mengubah tipe partisinya.ketik **L** untuk melihat semua daftar jenis partisi .ketik **ef** lalu enter.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734588279796/8ed608bb-2eb0-473c-8eb5-4781095afe9a.png align="left")

## Membuat Partisi root,home,etc

Dalam partisi yang umum biasanya adalah membuat partisi root,swap ,home secara terpisah.Namun dalam case ini kita hanya menggunakan partisi swap dan root saja.

### Partisi Swap

Pastikan kita masih dalam (fdisk),dan ketik **n** membuat partisi baru .Secara default akan diberi nomor partisi 2 .Lalu First Sector kita kosongkan ,dan isi **+2048M** *(atau sesuai kebutuhan)*:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734589356965/e9c6ee22-4f1d-44e8-bd53-98fd2aeac440.png align="left")

### Partisi root

Kita buat lagi untuk partisi **root** nya ,untuk First dan Last Sectio kita enter saja secara default atau sisa sector yang tersisa :

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734589625473/0d88d380-1174-4620-be8c-793cf54cf3cc.png align="left")

### Melihat Table Partisi

Ketika semua sudah dibuat ,kita bingung nih,cara melihat partisi yang sudah dibuat itu bagaimana?.

Jadi untuk menampilkan partisi yang sudah kita buat kita tinggal ketik **p** :

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734590095920/f5ddd4e5-c5d3-48dc-8c4c-97fd48769bb5.png align="left")

## Membuat Filesistem

Ketika sudah selesai menggunakan fdisk ,ketik **w** untuk write/menyimpan konfigurasi partisi kita tadi.

Sekarang kita mempunyai 3 disk partisi ,Selanjutnya kita butuh tools **mkfs** buat memformat disk tersebut.

`Tip : mkfs adalah alat bantu baris command line di Linux untuk memformat disk atau partisi pada sistem.mkfs singkatan dari “make file system“.`

Kita format partisi tadi menjadi F32\*\*/\*\*Fat32:

```apache
mkfs.fat -F32 /dev/sda1
```

Format Swap:

```apache
mkswap /dev/sda2
```

Format ext4 (root) :

```apache
mkfs.ext4 /dev/sda3
```

## Menyambungkan Jaringan Internet

Kita dapat menyambungkan internet melalui wired atau wireless,dengan tools [**iwctl**](https://wiki.archlinux.org/title/Iwctl).

[Unt](https://wiki.archlinux.org/title/Iwctl)uk memastikan antarmuka jaringan kita terdaftar dan diaktifkan dengan menggunakan command :

```nginx
ip link
```

Menyambungkan jaringan melalui Wifi dengan tools **iwctl** :

```ini
iwctl
```

Selanjutnya kita bisa melihat semua wireless interface yang tersedia :

```ini
[iwctl] device list
```

Lalu setelah itu kita pindai jaringan yang tersedia :

```ini
[iwctl] station wlan0 scan
```

Jika saat memindai jaringan ,kita tidak bisa melihat nama jaringan yang tersedia ,jadi untuk melihat koneksi yang tersedia ,dengan :

```ini
[iwctl] station wlan0 get-networks
```

Jika sudah ada jaringan yang tersedia ,kita dapat connect ke Wi-fi target :

```ini
[iwctl] station wlan0 connect "Name SSID/Wifi"
```

Setelah itu kita dapat memasukkan passphrase buat connect ke Wi-fi tersebut.

Untuk keluar dari **\[iwctl\]** ,tekan **CTRL + D** .

Sesudah connect kita coba tes ping ke google.com :

```apache
ping google.com
```

## Memilih mirror yang sesuai

Pertama kita harus menghubungkan/sync ke pacman repository:

```nginx
pacman -Syy
```

Selanjutnya kita install reflector untuk digunakan membuat daftar mirror yang baru dan cepat yang ada di lokal/negara:

```nginx
pacman -S reflector
```

Sekarang kita daftarkan mirror yang bagus dengan reflector dan disimpan ke daftar mirror ,misal kita ambil mirror dari negara Indonesia:

```nginx
reflector -c Indonesia -a 12 -p https -f 12 -l 10 -n 12 --save /etc/pacman.d/mirrorlist
```

## Menginstall Arch Linux

Sekarang saatnya menginstall Arch Linux di direktori root ,Jadi kita lakukan mount partisinya terlebih dahulu :

```nginx
mount /dev/sda3 /mnt
```

Dengan partisi root yang termount ke /mnt ,kita menggunakan tools pacstrap untu menginstall semua paket yang diperlukan:

```nginx
pacstrap /mnt base linux linux-firmware vim nano
```

Disini kita perlu text editor **vim** dan **nano** buat mengedit beberapa perubahan setelah instalasi.

## Konfigurasi sistem Arch Linux

Kita membuat file **fstab** untuk menentukan partisi disk ,block devices,atau remote file system dipasang ke dalam filesystem,dengan menggunakan tools **genfstab**.

```nginx
genfstab -U /mnt >> /mnt/etc/fstab
```

Sekarang kita menggunakan **arch-chroot** dan memasukkan disk yang terpasang sebagai root.Sebenarnya kita sudah menginstall Arch Linux system pada disk yang kita mount di **/mnt**. Kita harus mengkonfigurasi pada sistem yang terinstall agar kita dapat menjalankannya dengan benar saat melakukan proses booting dari disk.

```bash
arch-chroot /mnt
```

## Mengatur Timezone

Untuk setup timezone pada linux ,kita dapat menggunakan tools **timedatectl** .Pertama kita harus cari zona waktu terlebih dahulu :

```nginx
timedatectl list-timezones
```

Atau misal kita ingin timezone Asia/Jakarta dengan mudah,dengan command :

```nginx
timedatectl list-timezones | grep Jakarta
```

Lalu kita set ke Asia/Jakarta :

```nginx
timedatectl set-timezone Asia/Jakarta
```

## Setting up Locale

Ini adalah settingan untuk menentukan format bahasa,penomoran,tanggal ,dan mata uang untuk sistem Arch .

Pada file **/etc/locale.gen** berisi semua pengaturan lokal dan bahasa sistem dalam format tercomment semua.

Kita buka file tersebut dengan text editor nano/vim dan uncomment (hapus tanda # ) dan pilih bahasa :

```nginx
nano /etc/locale.gen
```

Uncomment bagian ini ,supaya mudah dalam mencari tekan **CTRL + W** dan masukkan :**en\_US.UTF-8 UTF-8** **:**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734608272519/e948b216-45f0-4388-a5f3-bf5f17c0b4f2.png align="left")

Setelah itu kita generate locale di folder etc/, dengan command :

```nginx
nano /etc/locale.gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
export LANG=en_US.UTF-8
```

## Mengatur Jaringan localhost/hostname

Kita buat file **/etc/hostname** dan menambahkan entri hostname ke file hostname tersebut.Hostname pada dasarnya adalah nama komputer kita yang di jaringan.

Dalam case ini kita menetapkan hostname nya dengan nama archuser.Sebenarnya ini tergantung kebutuhan/kemauan kita :

```nginx
echo archuser > /etc/hostname
```

Selanjutnya kita buat host file :

```nginx
touch /etc/hosts
```

Dan edit file **/etc/hosts** dengan nano/vim ,dengan menambahkan baris berikut :

```xml
127.0.0.1    localhost
::1    localhost
127.0.0.1    archuser
```

## Setting root password

Kita dapat mengatur kata sandi untuk root ,dengan command :

```nginx
passwd
```

Kita akan diminta untuk memasukkan dan mengetik ulang kata sandi untuk mengkonfirmasi.

## Install Grub Bootloader dalam UEFI sistem

Ini adalah salah satu langkah berbeda untuk sistem UEFI dan non-UEFI,Berikut langkah untuk install boot grub loader sistem UEFI terlebih dahulu :

```nginx
pacman -S grub efibootmgr
```

Membuat direktori dimana partisi EFI akan di mount :

```nginx
mkdir /boot/efi
```

Sekarang,mount partisi ESP yang telah kita buat :

```nginx
mount /dev/sda1 /boot/efi
```

Lalu install grubnya :

```nginx
grub-install --target=x86_64-efi --bootloader-id=GRUB --efi-directory=/boot/efi
```

Langkah terakhir :

```nginx
grub-mkconfig -o /boot/grub/grub.cfg
```

## Menginstall grub dalam Non-UEFI sistem

Menginstall paket grub terlebih dahulu :

```nginx
pacman -S grub
```

Kemudian install grub dengan command ini :

`Tip : Jangan cantumkan nomor seperti /dev/sda1 ,cukup nama disk saja ,/dev/sda`

```nginx
grub-install /dev/sda
```

Langkah terakhir :

```nginx
grub-mkconfig -o /boot/grub/grub.cfg
```

## Membuat User tambahan dan Enforce privileges

Meginstall paket sudo :

```nginx
pacman -S sudo
```

Sekarang membuat user baru dan memberikan permissions ,dalam case ini kita terserah nama pengguna dengan kebutuhan kita :

```nginx
useradd -m arch
passwd arch
```

Menambahkan pengguna ini ke grub user yang memberikan izin tertentu :

```nginx
usermod -aG wheel,audio,video,storage arch
```

Langkah selanjutnya kita buka dengan paksa dengan nano,atau dengan vim kalau kita bisa , dengan command :

```nginx
EDITOR=nano visudo
visudo
```

Kita uncomment pada bagian ini **%wheel ALL=(ALL:ALL) ALL** atau pada line 125 :

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1734613181677/46ff43d1-9bbf-4206-a835-0f68a8785dce.png align="left")

Save and exit.

## Menginstall DE(Desktop Environment)

Disini kita tinggal menginstall Xorg sebagai tampilan bersama dengan network manager :

```nginx
pacman -S xorg xorg-server networkmanager
systemctl enable NetworkManager
```

`Tip : Pilih salah satu DE saja untuk diinstall`.

### XFCE

```nginx
pacman -S lightdm lightdm-gtk-greeter
pacman -S xfce4 xfce4-goodies
systemctl enable lightdm
```

### GNOME

```nginx
pacman -S gdm gnome gnome-extra
systemctl enable gdm
```

### KDE

```nginx
pacman -S sddm plasma kde-applications
systemctl enable sddm
```

### Tambahan paket pendukung

Audio ,fonts :

```nginx
pacman -S pulseaudio pulseaudio-alsa ttf-dejavu ttf-liberation noto-fonts
```

Langkah terakhir enabling display manager GDM/LIGHTDM/SDDM ,dan mengenable Network Manager :

XFCE:

```nginx
systemctl enable lightdm.service
```

KDE :

```nginx
systemctl enable sddm.service
```

GNOME :

```nginx
systemctl enable gdm.service
```

Sekarang kita keluar dari chroot dengan command :

```nginx
exit
```

atau,

```nginx
CTRL + D
```

Sekarang ,kita umount root partisi pada /mnt :

```nginx
umount /mnt
```

Or,

```nginx
umount -l /mnt
```

And reboot/shutdown

```nginx
reboot
```

Jangan lupa untuk cabut live usbnya ya!.

Jika ada salah pengetikan atau typo wajar lah ya,atau bisa kasih feedback atau saran

## Kesimpulan

Jadi Arch Linux sangat cocok bagi pengguna yang menginginkan **full-control** pada sistemnya dan menghargai kesederhanaan,fleksibilitas,serta perangkat lunak terkini.

## Referensi :

[https://wiki.archlinux.org/title/Arch\_Linux\_(Bahasa\_Indonesia)](https://wiki.archlinux.org/title/Arch_Linux_\(Bahasa_Indonesia\))

[https://wiki.archlinux.org/title/Installation\_guide#Prepare\_an\_installation\_medium](https://wiki.archlinux.org/title/Installation_guide#Prepare_an_installation_medium)

[https://itsfoss.com/install-arch-linux/](https://itsfoss.com/install-arch-linux/)

[https://linuxhandbook.com/mkfs-command/](https://linuxhandbook.com/mkfs-command/)
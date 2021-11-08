# DOM Event Bubbling And Capturing

==========================================================================================================================

Pada pembahasan kali ini saya akan membahas dua hal yang bisa dibilang bertentangan yang dilakukan oleh javascript pada code yang telah kita tulis, dua hal tersebut ialah :

**1. Event Bubbling**

> *Event Bubbling* ialah saat dimana event/aksi yang di berikan pada sebuah element juga memicu atau menjalanan event/aksi yang di berikan kepada element pembungkusnya (*parentElement*), jadi sesuai dengan namanya _Bubbling_ gelembung jadi event/aksi nya mengelembung ke element pembungkusnya (*parentElement*).

**2. Capturing**

>*Event Capturing* ialah saat dimana event/aksi yang di berikan pada sebuah element juga menangkap dan menjalanan event/aksi yang di berikan kepada element yang di bungkus / yang berada di dalam element tersebut (*child Element*), jadi sesuai dengan namanya _Capturing_ Menangkap jadi ia menangkap event/aksi dari element yang di bungkus / yang berada di dalam element tersebut (*child Element*).

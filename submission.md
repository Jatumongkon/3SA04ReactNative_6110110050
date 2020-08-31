นายจตุมงคล แสงพุ่ม รหัส 61110110050 sec 01

3SA04–React Native



วิธีการทดลอง
1 ทำการติดตั้งเครื่องมือที่จำเป็นได้แก่
- Chocolatey (for Windows)หรือ Brew (for
OSX)
- Node.js
- Yarn
- Git
- expo CLI
- Visual Studio Code
- Android Studio
2 ทำการติดตั้ง  create-react-app CLI  โดยใช้คำสั่ง yarn global add expo-cli
3 ทำการสร้างโปรเจ็ค

สรุปและอธิปรายผลการทำลอง
ตอนที่ 2 Hello world
    ได้ทำการทดลองเพื่อให้โปรแกรมแสดงข้อความ hello world  บนโทรศัพท์มือถือ มีการทดลอง  passin props  ช่วยในการรับค่าต่างๆ
ตอนที่ 3 Flex Box
    เรียนรู้การจัก  flex เบื้องต้น 
    flex ใช้ในการบอกขนาด
    flexDirection ใช้ตั้งค่า layout  ว่าเป็น row หรือ  column
    justifyContent ใช้ในการกระจายตัว
    alignItems  ใช้ในการกระจายตัว
ตอนที่ 4 Connect
    จะมีการใช้ useEffect ลงไปในคอมโพเนนต์ Weather เพื่อทำการขอข้อสภาพอากาศ
ตอนที่ 5 Router
    มีการใช้ Navigation Library เพื่อช่วยในการสลับหน้าจอ

งานเพิ่มเติม
    ได้มีการปรับปรุงให้มีภาพพื้นหลังเปลี่ยนไปตาม  zipCode  โดยมีการเช็คค่าจาก props.zipCode ตั้งค่าภาพพื้นหลังแล้วทำการ return  ออกไป

หลักการทำงาน
    ในคอมโพเนนต์ Weather จำทำการรับค่า zipCode มาเพื่อทำการร้องขอ สภาพอากาศ แล้วส่งไปให้  App.js  แสดงผล ตัวแอปมีการใช้  react-navigation เพื่อทำการสลับหน้าจอในการแสดงผลระหว่าง  Home กับ Weather 
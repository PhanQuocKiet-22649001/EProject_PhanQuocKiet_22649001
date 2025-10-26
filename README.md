- Các URL sử dụng PORT 3003 của API GateWay sau đó API GateWay sẽ định tuyến về các dịch vụ tương ứng thông qua các endpoint và sử dụng port tương ứng của các dịch vụ đó:
- Các endpoint tương ứng: 
auth: /auth
product: /products
order: /orders


Test API trên POSTMAN: 
1. Register thành công
<img src = "public/img/img1.png"></img>
<img src = "public/img/img7.png"></img>

2. Register thất bại do username tồn tại 
<img src = "public/img/img2.png"></img>

3. login thành công, trả về token
<img src = "public/img/img3.png"></img>

4. login thất bại: username không tồn tại
<img src = "public/img/img4.png"></img>

5. login thất bại: sai pass
<img src = "public/img/img5.png"></img>

6. Xem Dashboard thành công
- Gửi kèm token x-auth-token được lấy ở bước login
<img src = "public/img/img6.png"></img>


Từ phần số 7 về sau sẽ gửi kèm token authorization cũng được trả về ở bước login: Bearer token (có khoảng trắng)
7. Thêm product thành công
<img src = "public/img/img8.png"></img>
<img src = "public/img/img9.png"></img>

8. Xem danh sách sản phẩm
<img src = "public/img/img10.png"></img>

9. Tạo 1 order thành công
<img src = "public/img/img11.png"></img>
<img src = "public/img/img12.png"></img>
<img src = "public/img/img13.png"></img>

10. Tìm sản phẩm theo ID
<img src = "public/img/img14.png"></img>
11. Tìm sản phẩm theo ID thất bại
<img src = "public/img/img15.png"></img>
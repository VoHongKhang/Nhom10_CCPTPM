# Nhom10_CCPTPM - Nhóm test
## Tên đề tài:
Phát triển giao diện, xử lý cho hệ thống tương tự https://www.talkdesk.com/cloud-contact-center/customer-experience-analytics/ và xây dựng các testcase

## Thành viên
* Võ Hồng Khang - 20110281
* Phan Văn Đức Anh - 20110609
* Bùi Đặng Quốc Chí - 20110614

## Framework
* React phiên bản 18.0


## Ngôn ngữ sử dụng
* Ngôn ngữ chính: js


## Test case tự động trên github 
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/aa35395f-dfcb-4210-b17e-9dca23a965d8)


## Các test case được report lại 
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/7bef65d3-4196-4de7-a9d9-447809349ac9)



## Run Locally
### Clone the project
git clone https://github.com/VoHongKhang/Nhom10_CCPTPM.git
### Go to the project directory 
cd Nhom10_CCPTPM
### Install dependencies
npm install
### Start the server
npm start

## Deploy với Docker
### Bước 1: cd vào thư mục Nhom10_CCPTPM sau khi clone
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/5c703d9e-97cd-4cc5-a5aa-4a5423294878)

### Bước 2: Sử dụng câu lệnh để build:
docker build -t vohongkhang/reac-app:1.0.2 .
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/ce10e455-5f3c-41af-89c6-2c5d3e9fe02e)

### Bước 3: Kiểm tra đã build thành công chưa
docker images
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/97cba82c-758e-4f67-9fa4-05be481a7203)

### Bước 4: Chạy docker images đã deploy
docker run -p 80:3000 --name react-app vohongkhang/react-app:1.0.2
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/0858e966-68af-47be-8e90-01445dc9eaf2)

### Bước 5: Deploy thành công
Sau đó vào trang đăng ký tài khoản
![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/87598819/a03c7a9c-ab03-4056-bf45-e7e43619732b)
Rồi tiến hành đăng nhập
## Cài đặt cấu hình để có thể SSH vào Server
### Bước 1: Truy cập vào AWS và đăng nhập

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/24e1dedf-bc33-4e6d-8bdf-58e9ae47b06d)

### Bước 2: Tìm kiếm dịch vụ EC2

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/2d318d4a-4612-4d63-a3d8-43bee2ae1284)

### Bước 3: Tại giao diện chính, chọn launch instance

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/c00db6e3-8656-450c-88c5-5947b55be40e)

### Bước 4: Cấu hình cho instance
#### 4.1. Đặt tên cho instance:

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/4912ebfd-eca8-45f8-ba34-cb8c98ef8401)

#### 4.2. Chọn hệ điều hành Amazon Linux:

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/989d5c27-7cc6-40ac-a1f0-40afb689a6a6)

#### 4.3. Ở mục instance type, chọn t2.small trở lên để cho bộ nhớ lớn hơn:

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/a28defd1-b3ad-4655-b8ee-4fca0930c23f)

#### 4.4. Ở mục Key pair, tạo hoặc chọn key có sẵn:

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/e5964068-6716-48a3-9f13-5b7a491efc40)

Ở đây nhóm dùng key pair có sẵn tên là nhom10dack

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/76d8afa5-3456-4674-8a0f-1605ca2a4b75)

#### 4.5. Bấm vào nút launch instance để hoàn tất

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/e9916a93-5019-4ae0-9cca-d0dadd9175ff)

### Bước 5: Cấu hình Security cho instance vừa tạo
#### 5.1 Sau khi trạng thái chuyển sang 2/2 checks passes

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/ec4ea6f9-a7de-4df8-9002-1b7130f0f9d7)

#### 5.2 Ta vào Security Group chọn instance vừa tạo

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/dc31461c-3d92-476c-b4de-0a98df1e92a2)

Sau đó ta chọn edit inbound rules

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/fb02d652-a71c-459c-b1e9-f0ced4149c0f)


#### 5.3 Ta cấu hình thêm cái port cần thiết để có thể chạy môi trường

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/000ea2a7-8011-4efd-be9a-c3caa2840532)

Ta nhấn save rules để lưu

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/bdcbde52-752e-4d8a-b28d-afd54bbac4f5)

#### 5.4 Sau khi cấu hình security ta vào instance vừa tạo để kết nối

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/88902dcd-54db-4564-aa5b-8b4152851e25)

Ta chọn connect

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/4d8d714f-cb66-4601-a9da-a031dd2c2066)

#### 5.5 Sau khi kết nối thành công ta sử dụng các câu lệnh để deploy web

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/93f6c784-8137-4ae2-abcc-0d13cb94c795)

Đây là các câu lệnh
```
- sudo -i
- sudo yum install docker
- sudo yum install docker -y
- sudo service docker start
- docker -v
- docker pull vohongkhang/react-app:1.0.1
- docker images
- docker run -p 80:3000 --name react-app vohongkhang/react-app:1.0.1
```

Kết quả: Build thành công

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/6f44f99a-0de8-487b-b827-7dbb7b0401cc)

Đây là giao diện web

![image](https://github.com/VoHongKhang/Nhom10_CCPTPM/assets/119037853/5a3ebc0a-cbeb-4784-b691-83422f1654e9)

 



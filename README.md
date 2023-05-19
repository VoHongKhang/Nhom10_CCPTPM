# Nhom10_CCPTPM
## Tên đề tài:
Phát triển giao diện, xử lý cho hệ thống tương tự https://www.talkdesk.com/cloud-contact-center/customer-experience-analytics/ 

## Thành viên
* Võ Hồng Khang - 20110281
* Phan Văn Đức Anh - 20110609
* Bùi Đặng Quốc Chí - 20110614

## Framework
* React phiên bản 18.0


## Ngôn ngữ sử dụng
* Ngôn ngữ chính: js



# Run Locally
## Clone the project
git clone https://github.com/VoHongKhang/Nhom10_CCPTPM.git
## Go to the project directory 
cd Nhom10_CCPTPM
## Install dependencies
npm install
## Start the server
npm start

# Cài đặt cấu hình để có thể SSH vào Server
## Bước 1: Truy cập vào AWS và đăng nhập

## Bước 2: Tìm kiếm dịch vụ EC2

## Bước 3: Tại giao diện chính, chọn launch instance


## Bước 4: Cấu hình cho instance
### 4.1. Đặt tên cho instance:



### 4.2. Chọn hệ điều hành Amazon Linux:










### 4.3. Ở mục instance type, chọn t2.small trở lên để cho bộ nhớ lớn hơn:


### 4.4. Ở mục Key pair, tạo hoặc chọn key có sẵn:

Ở đây nhóm dùng key pair có sẵn tên là nhom10dack










### 4.5. Bấm vào nút launch instance để hoàn tất

## Bước 5: Cấu hình Security cho instance vừa tạo
### 5.1 Sau khi trạng thái chuyển sang 2/2 checks passes

### 5.2 Ta vào Security Group chọn instance vừa tạo

Sau đó ta chọn edit inbound rules


### 5.3 Ta cấu hình thêm cái port cần thiết để có thể chạy môi trường

Ta nhấn save rules để lưu

### 5.4 Sau khi cấu hình security ta vào instance vừa tạo để kết nối

Ta chọn connect

### 5.5 Sau khi kết nối thành công ta sử dụng các câu lệnh để deploy web

Đây là các câu lệnh
sudo -i
sudo yum install docker
sudo yum install docker -y
sudo service docker start
docker -v
docker pull vohongkhang/react-app:1.0.1
docker images
docker run -p 80:3000 --name react-app vohongkhang/react-app:1.0.1
Kết quả: Build thành công

Đây là giao diện web

 



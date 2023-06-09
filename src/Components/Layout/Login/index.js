import { Navigate, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

export default function Login() {
    const cx = classNames.bind(styles);
    var isLogin = localStorage.getItem('isLogin') || false;

    var user = JSON.parse(localStorage.getItem('listUser_Admin')) || [
        {
            username: 'ducanh',
            address: 'Hà Nội',
            email: 'ducanh',
            age: 20,
            key: '0',
            name: 'DUC ANH',
            password: 'anh181102',
            isLogin: false,
            role: 'admin',
        },
    ];

    // Lưu thông tin user vào localStorage
    localStorage.setItem('listUser_Admin', JSON.stringify(user));
    const navigate = useNavigate();
    // var username = JSON.stringify(localStorage.getItem('username'));
    // var password = JSON.stringify(localStorage.getItem('password'));
    if (isLogin === 'true') {
        return <Navigate to="/" />;
    }

    // Nhấn Enter để login
    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            var username_input =
                document.getElementsByName('username')[0].value;
            var password_input =
                document.getElementsByName('password')[0].value;
            login(username_input, password_input);
        }
    });

    function login(username_input, password_input) {
        let flag = false;
        user.forEach((element) => {
            if (
                element.username === username_input &&
                element.password === password_input
            ) {
                flag = true;
            }
        });
        if (flag === false) {
            alert('Username or Password is incorrect');
        } else {
            localStorage.setItem('isLogin', true);
            navigate('/');
        }
    }
    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <h1>Login</h1>
                <span></span>
                <div className={cx('form')}>
                    <div className={cx('inputs')}>
                        <div className={cx('input')}>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        {/* <div className={cx("input">
                        <input type="email" placeholder="Email" />
                        <div className={cx("error-input"></div>
                        <span></span>
                    </div> */}
                        <div className={cx('input')}>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        {/* <div className={cx("input">
                        <input type="password" placeholder="Confirm Password" />
                        <div className={cx("error-input"></div>
                        <span></span>
                    </div> */}
                    </div>
                    <button
                        className={cx('login')}
                        id="login-button"
                        onClick={() => {
                            var username_input =
                                document.getElementsByName('username')[0].value;
                            var password_input =
                                document.getElementsByName('password')[0].value;
                            login(username_input, password_input);
                        }}
                    >
                        Login
                    </button>
                    <div className={cx('signup')}>
                        Already have an account?
                        <a
                            onClick={() => {
                                navigate('/register');
                            }}
                        >
                            {' '}
                            Signup
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

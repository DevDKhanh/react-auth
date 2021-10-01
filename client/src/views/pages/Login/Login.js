import React, { useState } from 'react';
import { authAPI } from '../../../api/authAPI';
import { useDispatch } from 'react-redux';

import * as actions from '../../../actions';

export default function Login() {
	const [dataUser, setDataUser] = useState({ userName: '', passWord: '' });
	const dispatch = useDispatch();

	const handleChange = e => {
		const nameValue = e.target.name;
		const value = e.target.value;
		dataUser[nameValue] = value;
		setDataUser({ ...dataUser });
	};
	const handleSubmit = e => {
		e.preventDefault();
		authAPI
			.login(dataUser)
			.then(handleLogin)
			.catch(err => console.log(err));
	};
	const handleLogin = res => {
		if (res.status === 1) {
			dispatch({
				type: actions.USER_LOGIN,
				payload: res.data,
			});
		} else {
		}
	};

	return (
		<div className="main-page">
			<form onSubmit={handleSubmit} className="form form-login" action="">
				<div className="form-title">Đăng nhập</div>
				<div className="form-group">
					<label htmlFor="" className="form-label">
						Tên đăng nhập
					</label>
					<div className="form-element">
						<input
							className="form-input"
							type="text"
							name="userName"
							autoComplete="off"
							value={dataUser.userName}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="" className="form-label">
						Mật khẩu
					</label>
					<div className="form-element">
						<input
							className="form-input"
							type="password"
							name="passWord"
							value={dataUser.passWord}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<a href="/#" className="form-link">
						Quên mật khẩu?
					</a>
				</div>
				<div className="form-group">
					<button className="btn btn--pink">Đăng nhập</button>
				</div>
				<div className="form-group">
					<b>Chưa có tài khoản? </b>
					<a href="/#" className="form-link">
						Đăng kí ngay
					</a>
				</div>
			</form>
		</div>
	);
}

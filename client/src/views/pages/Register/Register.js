import React from 'react';

export default function Register() {
	return (
		<div className="main-page">
			<form className="form form-login" action="">
				<div className="form-title">Đăng ký</div>
				<div className="form-group">
					<label htmlFor="" className="form-label">
						Tên đăng nhập
					</label>
					<div className="form-element">
						<input
							name="userName"
							className="form-input"
							type="text"
							placeholder="example"
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="" className="form-label">
						Email xác nhận
					</label>
					<div className="form-element">
						<input
							className="form-input"
							name="email"
							type="email"
							placeholder="example@gmail.com"
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
							name="passWord"
							type="password"
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="" className="form-label">
						Nhập lại mật khẩu
					</label>
					<div className="form-element">
						<input
							className="form-input"
							name="passWord_re"
							type="password"
						/>
					</div>
				</div>
				<div className="form-group">
					<span className="tag">
						Bằng cách đăng ký tài khoản thành viên đồng nghĩa với
						việc bạn chấp nhận{' '}
						<a href="/#" className="form-link">
							điều khoản dịch vụ
						</a>{' '}
						của chúng tôi.
					</span>
				</div>
				<div className="form-group">
					<button className="btn btn--pink">Đăng ký</button>
				</div>
			</form>
		</div>
	);
}

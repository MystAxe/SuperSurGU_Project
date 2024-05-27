<div style="height: 85px;"></div>
<header class="header">
	<a class="header__logo" href="/">Epoxy Almaz</a>
	<div class="header__menu">
		<a class="header__item" href="catalog">КАТАЛОГ</a>
		<a class="header__item" href="faq">FAQ</a>
	</div>
</header>

<style>
	.header {
		z-index: 10;
		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		width: 100%;
		font-size: 24px;
		border-bottom: #000000 1px solid;
		background-color: #fff;
	}

	.header__logo {
		font-size: 32px;
		position: absolute;
		left: 30px;
		top: 20px;
		color: #000;
		text-decoration: none;
	}

	.header__menu {
		display: flex;
	}

	.header__item {
    padding: 25px 10px ;
		color: #000000;
		text-decoration: none;
    transition: .3s ease;
	}

  .header__item:hover {
    background-color: #eee;
  }

  .login-button {
	height: 32px;
	width: 32px;
  }

	.login-img {
		height: 32px;
		width: 32px;
	}
</style>

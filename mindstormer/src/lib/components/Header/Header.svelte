<header class="header">
	<div class="header__logo">MindStormer</div>
	<div class="header__menu">
		<a class="header__item" href="##">Link A</a>
		<a class="header__item" href="##">Item B</a>
		<a class="header__item" href="##">Deal C</a>
		<a class="header__item" href="##">Box D</a>
		<a class="header__item" href="##">Long Item E</a>
	</div>
	<div class="header__login">
		<a href="##" class="login-button">
			<img class="login-img" src="user-interface.png" alt="" />
		</a>
	</div>
</header>

<style>
	.header {
		display: flex;
		justify-content: center;
    align-items: center;
    gap: 20px;
		position: relative;
		width: 100%;
		font-size: 24px;
	}

	.header__logo {
		font-size: 32px;
		position: absolute;
    left: 10px;
    top: 10px;
	}

  .header__menu {
    display: flex;
  }

	.header__item {
    padding: 10px;
		color: #000000;
		text-decoration: none;
    transition: .3s ease;
	}

  .header__item:hover {
    background-color: aquamarine;
  }


	.login-img {
		height: 24px;
		width: 24px;
	}
</style>

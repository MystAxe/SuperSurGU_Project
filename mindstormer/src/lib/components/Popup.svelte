<script lang="ts">
	export let showModal: Boolean; // boolean

	let dialog: any; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog class="modal__wrapper"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal" on:click|stopPropagation>
		<slot name="header" />
		<slot />
		<button class="modal__close" on:click={() => dialog.close()}><span>Закрыть</span></button>
	</div>
</dialog>

<style>
  .modal__wrapper {
		max-width: 32em;
    border-radius: 25px;
		border: none;
		padding: 0 0 10px 0;
	}
	.modal__wrapper::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	.modal__wrapper > div {
		padding: 1em;
	}
	.modal__wrapper[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 20px;
  }
  .modal__close {
    font-size: 24px;
    border: #000 solid 1px;
    border-radius: 5px;
    padding: 5px 10px 7px;
    text-decoration: none;
    color: #000;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    background: none;
    margin-top: 20px;
  }
  .modal__close span {
    position: relative;
    z-index: 10;
  }
  .modal__close::before {
    content: "";
    background-color: #000;
    border-radius: 4px;
    height: 46px;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal__close span,
  .modal__close::before {
    transition: all 0.3s;
  }
  .modal__close:hover span {
    color: #fff;
  }
  .modal__close:hover::before {
    width: 100%;
  }
	
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	.modal__wrapper[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

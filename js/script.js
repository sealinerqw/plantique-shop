let draggedImage = null;

const draggableImages = document.querySelectorAll('img[draggable="true"]');

draggableImages.forEach(img => {
  img.addEventListener('dragstart', event => {
    setTimeout(() => {
      img.classList.add('dragging');
    }, 0);
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  img.addEventListener('touchstart', event => {
    draggedImage = event.target;
  });

  img.addEventListener('touchend', event => {
    draggedImage = null;
  });

  img.addEventListener('touchmove', event => {
    event.preventDefault();
  });
});

const cartItems = document.querySelector('.cart__items');
const cartDropArea = document.querySelector('.cart__droparea');
const button = document.querySelector('.button');

cartDropArea.addEventListener('dragover', event => {
  event.preventDefault();
});

cartDropArea.addEventListener('drop', event => {
  event.preventDefault();
  const id = event.dataTransfer.getData('text/plain');
  const img = document.getElementById(id);
  const clone = img.cloneNode(true);
  clone.classList.remove('dragging');
  cartItems.appendChild(clone);
  img.style.visibility = "hidden";
  img.classList.remove('dragging'); // Remove the dragging class after drop
  if (cartItems.childElementCount === 3) {
    draggableImages.forEach(img => {
      img.setAttribute("draggable", "false");
    });
    button.classList.add('visible');
  }
});

cartDropArea.addEventListener('touchmove', event => {
  event.preventDefault();
});

cartDropArea.addEventListener('touchend', event => {
  if (draggedImage && cartDropArea.contains(event.target)) {
    const clone = draggedImage.cloneNode(true);
    cartItems.appendChild(clone);
    draggedImage.style.visibility = "hidden";
    draggedImage.classList.remove('dragging'); // Remove the dragging class after drop

    if (cartItems.childElementCount === 3) {
      draggableImages.forEach(img => {
        img.setAttribute("draggable", "false");
      });
      button.classList.add('visible');
    }
  }
});

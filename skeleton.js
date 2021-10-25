(function loadSkeleton() {
  const skeletonCSS = `
      <style>
      .skeleton {
        border-radius: 5px;
        animation: 650ms linear infinite alternate skeleton-loading;
      }
      
      .post__tag, .post__author--role {
        height: 20px;
        width: 70px;
      }
      .post__tag:last-of-type {
        width: 110px;
      }
      .post__date, .post__author--name {
        height: 28px;
        width: 140px;
      }
      .post__author--name {
        margin-bottom: 10px;
      }
      .post__header {
        border-radius: 0;
        min-height: 120px;
      }
      .post__author--avatar {
        border-radius: 50%;
        width: 55px;
        height: 55px;
      }
      .post__body .skeleton {
        min-height: 18px;
        margin-bottom: 10px;
      }
      
      .post__body .skeleton:last-of-type {
        width: 80%;
      }
      .btn {
        min-height: 50px;
        min-width: 190px;
      }
      @keyframes skeleton-loading {
        0% {
          background-color: hsl(var(--accent2));
        }
        100% {
          background-color: hsl(var(--accent1) / .2);
        }
      }
      </style>
      `;
  const skeleton = `
      <div class="skeleton-load">
      <article class="post">
      <div class="post__meta">
      <div class="post__tag--container">
      <span class="skeleton post__tag"></span>
      <span class="skeleton post__tag"></span>
      </div>
      <p class="skeleton post__date"></p>
      </div>
      <h3 class="skeleton post__header">
      
      </h3>
      <div class="post__author">
      <div class="skeleton post__author--avatar" width="55" ></div>
      <div>
      <p class="skeleton post__author--name"></p>
      <p class="skeleton post__author--role"><small></small></p>
      </div>
      </div>
      <div class="post__body">
      <p class="skeleton"></p>
      <p class="skeleton"></p>
      <p class="skeleton"></p>
      <p class="skeleton"></p>
      </div>
      <a href="#" class="skeleton btn"></a></article>
      </div>
      `;
  document.querySelector(".post-container").innerHTML = [
    skeleton.repeat(3),
    skeletonCSS,
  ].join("");
})();

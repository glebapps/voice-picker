<template>
  <div class="title">
    <h3>
      <span>
        <slot />
      </span>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin-top: 48px;
  margin-bottom: 32px;
  color: var(--fc-title);
  text-transform: uppercase;
}

h3 {
  position: relative;

  span {
    padding-right: 24px;
    background-color: var(--bg-body);
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 0.5em;
    border-top: 1px solid var(--fc-title);
    opacity: 0.3;
    content: '';
  }
}
</style>

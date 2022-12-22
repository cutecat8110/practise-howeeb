<template>
  <div class="layout_root">
    <header>
      <PageHeader></PageHeader>
      <PageBanner></PageBanner>
    </header>
    <main>
      <PageBreadcrumb></PageBreadcrumb>
      <slot></slot>
    </main>
    <PageFooter></PageFooter>
    <PageScrollTop></PageScrollTop>
  </div>
</template>

<style lang="scss" scoped>
.layout_root {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 3.75rem;

  main {
    flex: 1;
  }
}
</style>

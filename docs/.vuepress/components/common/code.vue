<template>
  <div class="code">
    <div class="code--title">
      <h2 :id="title">
        <a :href="'#'+title" aria-hidden="true" class="header-anchor">#</a>
        {{title}}
      </h2>
      <small>{{description}}</small>
    </div>
    <div class="code--demo">
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    <el-collapse-transition>
      <div v-show="isShow" class="code--segment">
        <slot name="codeText"></slot>
      </div>
    </el-collapse-transition>
    <div v-if="$slots.codeText" class="code--button" @click="isShow = !isShow">
      <span class="show-btn">
        <i :class="isShow ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
        <span class="show-btn-word">
          {{ isShow ? '隐藏代码' : '显示代码' }}
        </span>
        <span class=""></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  props: ['title', 'description'],
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  }
}
</script>

<style lang="scss">
.code {

  &:hover .show-btn {
    transform: translateX(0px);
  }

  &:hover .show-btn-word {
    transform: translateX(0px);
    opacity: 1;
  }
  .show-btn {
    display: inline-block;
    transition: 0.3s;
    transform: translateX(30px);
  }
  .show-btn-word {
    transition: 0.3s;
    opacity: 0;
  }

  .code--title {
    h2 {
      padding: 0;
      margin: 55px 0 20px;
      font-weight: 400;
      color: #1f2f3d;
      border-bottom: none;
      font-size: 22px;
    }

    small {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      line-height: 1.5em;
      color: #5e6d82;
    }
  }
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6), 0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .code-content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
  .code--button {
    border: 1px solid #ebebeb;
    border-top: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6), 0 1px 2px 0 rgba(232, 237, 250, 0.5);
    background: #f9fafc;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  margin-top: 40px;

  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>


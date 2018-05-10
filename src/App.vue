<template>
    <layout>
      <header>
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-menu">
            <div class="layout-logo">
            </div>
            <!--<div class="layout-nav">-->
              <!--<Menu-item name="1">-->
                <!--首页-->
              <!--</Menu-item>-->
              <!--<Menu-item name="2">-->
                <!--圈子-->
              <!--</Menu-item>-->
              <!--<Menu-item name="3">-->
                <!--我的-->
              <!--</Menu-item>-->
            <!--</div>-->
            <div class="layout-nav-right">
              <Auto-complete
                v-model="searchKeyword"
                :data="searchAutoCplt"
                @on-search="handleSearch"
                placeholder="搜索你感兴趣的内容~"
                icon="ios-search"
                style="width: 200px"/>
              <Button type="primary">搜索</Button>
              <Button type="warning">提问</Button>
              <div class="layout-avatar">
                <Dropdown  placement="bottom-start">
                  <Avatar icon="person" size="large" style="border: 2px solid #fff;box-shadow: 0 0 3px 1.5px rgba(26,26,26,.1)"></Avatar>
                  <DropdownMenu slot="list">
                    <DropdownItem><span><Icon type="ios-list"/> 我的信息</span></DropdownItem>
                    <DropdownItem><span><Icon type="ios-gear"/> 设置</span></DropdownItem>
                    <DropdownItem divided><span><Icon type="android-exit"/> 退出登录</span></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Menu>
      </header>
      <Content>
        <div class="layout-content">
        </div>
      </Content>
    </layout>
</template>

<script>
import Button from '../node_modules/iview/src/components/button/button'
import Menu from '../node_modules/iview/src/components/menu/menu'
import Layout from '../node_modules/iview/src/components/layout/layout'
import Header from '../node_modules/iview/src/components/layout/header'
import Content from '../node_modules/iview/src/components/layout/content'
import MenuItem from '../node_modules/iview/src/components/menu/menu-item'
import Icon from '../node_modules/iview/src/components/icon/icon'
import Row from '../node_modules/iview/src/components/grid/row'
import Col from '../node_modules/iview/src/components/grid/col'
import Input from '../node_modules/iview/src/components/input/input'
import AutoComplete from '../node_modules/iview/src/components/auto-complete/auto-complete'
import Dropdown from '../node_modules/iview/src/components/dropdown/dropdown'

export default {
  components: {
    Dropdown,
    AutoComplete,
    Input,
    Row,
    Col,
    Icon,
    MenuItem,
    Content,
    Header,
    Layout,
    Button,
    Menu
  },
  name: 'App',
  data () {
    return {
      searchKeyword: '',
      searchAutoCplt: []
    }
  },
  methods: {
    handleSearch (value) {
      this.searchAutoCplt = !value ? [] : [
        value,
        value + value,
        value + value + value
      ]
    }
  }

}
</script>

<style lang="less" scoped>
  @import "./styles/theme/style";
  .layout-logo{
    float: left;
    width: 100px;
    height: 30px;
    background: @primary-color;
    border-radius: 3px;
    position: relative;
    left: 20px;
    top: 15px;
  }
  .layout-nav{
    float: left;
    width: 300px;
    height: 60px;
    margin:0 auto;
    margin-left: 160px;
  }
  .layout-menu{
    .mainArea();
    margin: 0 auto;
  }
  .layout-content{
    background: white;
    height: 900px;
    .mainArea();
  }
  .layout-nav-right {
    float: right;
    width: 400px;
    padding: 0 16px;
  }
  .layout-avatar {
    float: right;
  }
</style>

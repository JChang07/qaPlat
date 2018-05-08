<template>
<div class="login-layout-container">
  <Row type="flex" align="middle">
    <Col :sm="24" :xs="0">
      <div class="login-layout-card">
        <Card>
          <div class="login-logo">
          </div>
          <div class="login-form">
          </div>
        </Card>
      </div>
    <Col>
  </Row>
</div>
</template>
<script>
import Card from '../node_modules/iview/src/components/card'
export default{
  components: {
    Card
  }
}
</script>

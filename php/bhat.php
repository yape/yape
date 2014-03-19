<!-- 最新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<!--<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap-theme.min.css"> -->
<div class="panel panel-default" style="width:900px;margin:10px auto;">
  <div class="panel-heading">
    <h3 class="panel-title">聊天信息</h3>
  </div>
  <div class="panel-body" style="height:300px;overflow-y:auto;" id="showMessageContainer">
  <table width="100%" height="100%" id="showMessage">
  </table>
  </div>
</div>
<div class="input-group" style="width:900px;margin:10px auto;">
  <input id="sendValue" type="text" class="form-control" placeholder="按“Enter”发送信息" onkeypress="sendMesage(event);">
  <span type="button" class="input-group-addon btn btn-primary" onclick="sending();">发送</span>
</div>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min.js"></script>



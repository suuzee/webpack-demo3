var path = require('path'); // ����·���� 
module.exports={ 
entry:'./src/index.js',//����ļ� 
output:{ 
path:path.join(__dirname,'dist'),// ָ�����֮����ļ��� 
publicPath:'/dist/',// ָ����Դ�ļ����õ�Ŀ¼ 
filename:'bundle.js'// ָ�����Ϊһ���ļ� bundle.js 
}}
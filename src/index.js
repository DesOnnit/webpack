import * as $ from 'jquery'
import Post from "./Post";
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
const post = new Post('Webpack Post Title');
$('pre').addClass('code').html(post.toString())


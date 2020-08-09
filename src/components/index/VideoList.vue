<template>
	<div class="video-list">
		<swiper :option="swiperOption">
		
		</swiper>
		<!-- 评论 -->
		<transition name="up">
		<div class="comment-wrap-box">
		<div class="comment-warp">
			<div class="comment-list">
				<div class="comment-top">
					<div class="number">评论99+</div>
					<div class="close">×</div>
				</div>
				<div class="comment-body">
					<div class="comment-box">
						<div class="comment-items">
							<div class="user-pic"><img src="../../static/img/n=2.jpg" alt=""></div>
							<div class="item-info">
								<div class="reply">
									<p class="name">T.T</p>
									<p class="reply-des">送货很快，好评好评~ &nbsp;&nbsp;<span class="time">08-07</span></p>
								</div>
								<div class="zan"><span class="iconfont icon-aixin"></span> <p>200</p></div>
							</div>
						</div>
						<div class="sub-comment-items">
							<div class="user-pic"><img src="../../static/img/2.jpg" alt=""></div>
							<div class="item-info">
								<div class="reply">
									<p class="name">L.L</p>
									<p class="reply-des">
										<span>回复</span>
										<span class="re-name">T.T</span>
										<span class="dialog">蟹蟹！&nbsp;&nbsp;&nbsp;&nbsp;</span>
										<span class="time">08-08</span></p>
								</div>
								<div class="zan"><span class="iconfont icon-aixin"></span> <p>200</p></div>
							</div>
						</div>
						<div class="more">------展开6条回复</div>
					</div>
				</div>
			
				
				<!-- 评论框 -->
				<div class="reply-input">
					<input type="text" name="" id="" placeholder="留下你的精彩评论" />
					<span class="emoji">@</span>	
					<span class="iconfont icon-pinglun"></span>
				</div>
			</div>
		</div>
		</div>
		</transition>
	</div>
</template>

<script>
	
	
</script>

<style>
	/* 评论 */
	.up-enter-active, .up-leave-active {
	  transition: all .5s;
	}
	.up-enter, .up-leave-to {
	  opacity: 1;
	  transform: translateY(100%);
	}
	.comment-wrap-box{
		position: fixed;
		bottom: 0px;
		left: 0;
		height: 500px;
		width: 100%;
		background: #FFFFFF;
		z-index: 88;
	}
	.comment-warp{
		position: fixed;
		bottom: 60px;
		left: 0;
		height: 500px;
		width: 100%;
		background: #FFFFFF;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		z-index: 999;
		padding: 10px 10px;
		box-sizing: border-box;
	}
	.comment-top{
		display: flex;
		align-items: center;
		background-color: #f7dfd4;
		height: 45px;
		border-radius:10px;
		box-shadow: 7px 7px 10px #ebeced;
	}
	.number{
		/* 居中 */
		flex: 1;
		text-align: center;
	}
	.close{
		padding-right: 10px ;
		font-size: 17px;
		color: #666666;
	}
	.comment-body{
		max-width: 450px;
		overflow: auto;
		margin-top: 20px;
	}
	.comment-items{
		display: flex;
	}
	.user-pic img{
		width: 33px;
		height: 33px;
		/* 圆形 */
		border-radius: 50%;
	}
	.item-info{
		margin-left: 10px;
		display: flex;
		flex: 1 1 auto;
	}
	.reply{
		width: 90%;
	}
	.reply-des{
		line-height: 24px;
		font-size: 15px;
	}
	.reply-des .dialog{
		font-size: 13px;
	}
	.reply .name{
		color: #666666;
		font-size: 14px;
		margin-bottom: 10px;
	}
	.reply .time{
		color: #666666;
	}
	.zan .iconfont{
		font-size: 24px;
		color: #CCCCCC;
		margin: 0 10px;
	}
	.zan p{
		color: #cccccc;
		margin-top: 5px;
		margin-left: 8px;
	}
	
	.sub-comment-items{
		display: flex;
		margin: 33px;
		margin-top: 10px;
	}
	.re-name{
		padding: 0 10px;
		color: #666666;
		}
	.more{
		margin-left: 33px;
		margin-top: 10px;
	}	
	.reply-input{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		align-items: center;
		display: flex;
	}
	
	.reply-input input{
		line-height: 40px;
		width: 70%;
		border: none;
		padding: 0 10px;
	}
	.reply-input .emoji,.iconfont{
		font-size: 30px;
		color: #CCCCCC;
		margin-right: 6%;
	}
	.reply-input .iconfont{
		font-size: 26px;
		color: #CCCCCC;
	}
</style>

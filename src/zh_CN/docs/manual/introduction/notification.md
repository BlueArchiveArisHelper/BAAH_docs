# 通知

在任务完成后，脚本可以通过邮件或者API回报任务执行情况。

## 邮件通知
::: tip
请勾选 `是否启用邮件通知，默认为QQ邮箱` 选项启用此功能。

:::

### 使用QQ邮箱获取通知
在 `邮箱账号/QQ号` 一栏输入你的QQ号。
在 `SMTP授权码` 一栏输入你的QQ邮箱的授权码。
- 如何获取QQ邮箱的授权码？
  
  [视频教程1](https://www.bilibili.com/video/BV16z4y1D74s/)

  [视频教程2](https://www.bilibili.com/video/BV1ZxfGYSEVr?t=1699.2)

  1. 打开[QQ邮箱网页版](https://mail.qq.com/)，登录账号，选择右上角的设置。
  2. 在设置页面中，找到 **设置** -> **账户与安全** -> **安全设置**。
  3. 找到 `POP3/IMAP/SMTP/Exchange/CardDAV 服务` ，选择 **开启服务**。
  4. 可能需要发送一条验证码，请根据邮件中的提示进行操作。
  5. 随后会返回一串密钥，将其填入 `SMTP授权码` 一栏的配置项中。

### 使用其他邮箱获取通知

::: tip
请勾选 `自定义邮件发送服务器` 选项启用此功能。

:::

1. 在 `邮箱账号/QQ号` 一栏输入你的邮箱。
2. 在 `发件人邮箱` 一栏输入发件的邮箱。
3. 在 `发件人邮箱` 一栏输入收件的邮箱。
4. 在 `SMTP授权码` 一栏输入你的邮箱的授权码。
   - 大部分邮箱获取授权码的方法大同小异，见上文QQ邮箱获取授权码的方法灵活变通，或者在网络上搜寻你所使用邮箱获取授权码对应的方法。
5. 在 `SMTP服务器` 一栏输入你的邮箱的SMTP服务器地址。

   - 常见邮箱SMTP服务器地址
   
| **#** | **邮箱**    | **SMTP服务器**              |
|-------|-----------|--------------------------|
| 1     | QQ邮箱      | smtp\.qq\.com            |
| 2     | 网易163邮箱   | smtp\.163\.com           |
| 3     | 网易126邮箱   | smtp\.126\.com           |
| 4     | Outlook邮箱 | smtp\-mail\.outlook\.com |
| 5     | 谷歌Gmail邮箱 | smtp\.gmail\.com         |
| 6     | 移动139邮箱   | smtp\.139\.com           |

   - 没有你使用的邮箱？请自行在网络上搜寻你所使用的SMTP服务器的地址。


## API通知

::: tip
请勾选 `是否启用API通知。自定义需注意关键字段格式` 选项启用此功能。

:::

可以使用API获取通知，可用于推送给微信公众号、QQ群等。这需要一些第三方服务，请自行在互联网上查阅。

1. 在 `API通知URL(get请求)` 一栏输入你的API地址。
> :memo: **注：** 可以点击API地址选项卡下方的 `PUSHPLUS`、`SERVERCHAN`或`TELEGRAM BOT` 按钮，自动添加[PushPlus](https://www.pushplus.plus/)、[Server酱](https://sct.ftqq.com/)或[Telegram Bot](https://t.me/BotFather)的API地址。

API地址的需要指定 Token，标题和内容的格式，关键词为[token], [title], [content]。

<details>
<summary>以Server酱为例</summary>

Server酱的API地址为：

```
https://sctapi.ftqq.com/<Token>.send?title=<标题>&desp=<内容>

```

因此在 `API通知URL(get请求)` 一栏输入：

```
https://sctapi.ftqq.com/[token].send?title=[title]&desp=[content]

```

</details>

2. 在 `API通知Token` 一栏输入你的API的Token。
> :memo: **注：** 各大通知API的Token获取方法各不相同，请根据你使用的服务自行查询。

## 自定义通知内容

可以通过自定义通知内容来修改通知内容。

在 `自定义通知格式化字符串` 一处，可填写下列**字段**，灵活控制通知内容。


| **#** | **字段**                          | **说明**       | **结果**                    |
|-------|---------------------------------|--------------|---------------------------|
| 1     | %PORT\_IS\_USED%                | 目标端口是否被占用    | True/False                |
| 2     | %EMULATOR\_PROCESS\_PID%        | 模拟器进程的 PID   | 进程 ID 数字或 None            |
| 3     | %GUI\_OPEN\_IN\_WEB%            | 是否在网页中打开 GUI | True/False                |
| 4     | %LAST\_TEAM\_SET%               | 上一次的队伍信息     | 列表                        |
| 5     | %CAFE\_HAD\_INVITED%            | 是否已邀请咖啡馆学生   | True/False                |
| 6     | %TIMETABLE\_NO\_TICKET%         | 课程表是否无票      | True/False                |
| 7     | %BAAH\_START\_TIME%             | BAAH 任务开始时间  | 字符串                       |
| 8     | %BEFORE\_BAAH\_SOURCES%         | 任务开始前的资源     | 体力、信用点和青辉石                |
| 9     | %AFTER\_BAAH\_SOURCES%          | 任务结束时的资源     | 体力、信用点和青辉石                |
| 10    | %CONTEST\_NO\_TICKET%           | 竞技场是否无票      | True/False                |
| 11    | %HAS\_ENTER\_EVENT%             | 是否已进入活动页面    | True/False                |
| 12    | %INFO\_DICT%                    | 任务执行中的详细信息   | 字典                        |
| 13    | %SCREENSHOT\_READ\_FAIL\_TIMES% | 截图读取失败次数     | 数字                        |
| 14    | %RESTART\_EMULATOR\_TIMES%      | 模拟器重启次数      | 数字                        |
| 15    | %SCREENSHOT\_DATA%              | 截图数据         | 当截图模式为pipe时使用，RGB 值或 None |
| 16    | %CURRENT\_PERIOD\_TASK\_INDEX%  | 执行的任务序数   | 数字，\-1 表示未执行任何任务          |

<details>
<summary>例子</summary>

输入内容：

``` 
任务执行完毕！
模拟器PID：%EMULATOR_PROCESS_PID%
任务开始时间：%BAAH_START_TIME%
任务开始前的资源：%BEFORE_BAAH_SOURCES%
任务结束时的资源：%AFTER_BAAH_SOURCES%
执行的任务序数：%CURRENT_PERIOD_TASK_INDEX%

```
回报内容：

![邮件回报](/img/notification/customize_email_content_1.png)

</details>

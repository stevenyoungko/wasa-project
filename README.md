# wasa-project

## 環境與連結

Environment  | Link
------------ | ------------------------------------------
Prod         | https://wasa-project-b7bfe.web.app/

## Component
>- FormCell: 父子元件雙向聯繫，資料源由外而內傳入提高客制彈性，透過formType決定類型，可由外傳入客製化屬性。
>- PrimaryButton: 利用slot給預設值，並可透過prop決定是按鈕還是 a link tag。

## Api
>- 導入axios並在request.js做 request response 攔截。api統一放在api文件夾統一管理。

## 主題色切換
>- 主題色統一放置 assets/css/theme去做統一管理
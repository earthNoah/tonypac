# tonypac
My private pac files, just for reference only.

### 说明
我的私人 PAC 配置文件，仅供参考。

- `pac_base.js` 基础 PAC 配置。
- `pac_tn.js` 在公司使用时的配置，因为公司内网屏蔽了一些不该屏蔽的网站 😂😂😂


### 使用

V2RayX (V2Ray 的 macOS 客户端) 的 pac 文件目录在 `/Users/tony/Library/Application Support/V2RayX/pac`，可以使用以下命令实现替换:

```
# 首先找一个你存放 tonypac 的地方，我这里用 /projects 路径
cd /projects/

# 克隆项目
git clone https://github.com/lucups/tonypac.git

# 备份老配置
cp -r /Users/tony/Library/Application\ Support/V2RayX/pac v2rayx_pac_bak

# 移除旧目录并替换原目录
rm -rf /Users/tony/Library/Application\ Support/V2RayX/pac
ln -s /projects/tonypac /Users/tony/Library/Application\ Support/V2RayX/pac

# 重启 V2RayX 客户端即可生效
```

### V2RayX (macOS) 配置图

![](imgs/select-pac-config.jpg)
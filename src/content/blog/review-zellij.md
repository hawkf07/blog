---
tags: budaya,sunda,paribasa
title: Review Singkat zellij
description: review program zellij
pubDate: Sat Jul 01 2023 07:56:45 GMT+0700 (Western Indonesia Time)
lang: Bahasa Indonesia
---

Zellij adalah program yang mirip seperti tmux atau screen yang memungkinkan kita mengakses beberapa sesi terminal dalam satu jendela atau **window**.
Tetapi program zellij memiliki beberapa _built in_ feature, dan bisa di atur sesuka hati.
berdasarkan pengalaman pribadi memakai program zellij, menurut saya lebih mudah daripada tmux karena fitur _built in_ nya keyboard _shortcut_ nya hampir sama dengan yang dipakai oleh tmux.
kalau ingin mengubah config nya juga mudah, tinggal jalankan

```bash
mkdir ~/.config/zellij # membuat folder zellij jika belum ada
zellij setup --dump-config > ~/.config/zellij/config.kdl # membuat config
```

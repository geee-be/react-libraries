---
'@geee-be/react-twui': patch
---

Fix Dialog and Sheet sharing one Radix Root: each compound now has its own root wrapper, so Dialog.Content no longer resolves to Sheet.Content (and vice versa)

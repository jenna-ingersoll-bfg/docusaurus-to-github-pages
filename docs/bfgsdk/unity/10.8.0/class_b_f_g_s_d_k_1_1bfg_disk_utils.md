  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgDiskUtils](class_b_f_g_s_d_k_1_1bfg_disk_utils.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_disk_utils-members.html)

BFGSDK.bfgDiskUtils Class Reference

##  Static Public Member Functions

static long 

[availableDiskSpace](class_b_f_g_s_d_k_1_1bfg_disk_utils.html#af0e78846a4941a818db2b629aa7eb24e)
()

 

Get amount of available space in internal storage. Android also has an
'external' storage that requires a read permission, so it is not
implemented here.
[More...](class_b_f_g_s_d_k_1_1bfg_disk_utils.html#af0e78846a4941a818db2b629aa7eb24e)  

 

## Member Function Documentation

## [◆ ](#af0e78846a4941a818db2b629aa7eb24e)availableDiskSpace()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static long BFGSDK.bfgDiskUtils.availableDiskSpace</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Get amount of available space in internal storage. Android also has an
'external' storage that requires a read permission, so it is not
implemented here.

  - Returns  
    The device's available disk space in bytes.

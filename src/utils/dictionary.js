//全部
export const all = [
	{ label: "全部", value: "" }
];

//性别
export const sex = [
	{ label: "男", value: "male" },
	{ label: "女", value: "female" }
];

//人员类型
export const userType = [
	{ label: "访客", value: "visitor" },
	{ label: "正式人员", value: "formal" }
];

//岗位状态
export const jobStatus = [
	{ label: "正常", value: "true" },
	{ label: "停用", value: "false" }
];

//部门状态
export const deptStatus = [
	{ label: "正常", value: "true" },
	{ label: "停用", value: "false" }
];

//用户状态
export const userStatus = [
	{ label: "激活", value: "true" },
	{ label: "锁定", value: "false" }
];

//证件类型
export const credentialType = [
	{ label: "身份证", value: "idCard" },
	{ label: "护照", value: "passport" },
	{ label: "港澳台通行证", value: "HMTpasses" },
	{ label: "其他", value: "other" }
];

//角色类型
export const roleType = [
	// { label: "超级管理员", value: "1" },
	{ label: "仓库管理员", value: 2 },
	{ label: "普通用户", value: 3 }
];

//角色类型
export const recordType = [
	{ label: "附近", value: "NEARBY" },
	{ label: "离开", value: "LEAVE" }
];

//设备授权类型
export const devicePermissionType = [
	{ label: "人员", value: "user" },
	{ label: "部门", value: "department" }
];

//设备授权类型
export const deviceType = [
	{ label: "人证设备", value: "faceRecognition" },
	{ label: "人脸打卡设备", value: "facePunch" },
	{ label: "门禁读卡设备", value: "cardDoor" },
	{ label: "远距离读卡设备", value: "cardRemote" }
];

//设备授权类型
export const faceDeviceType = [
	{ label: "人证设备", value: "faceRecognition" },
	{ label: "人脸打卡设备", value: "facePunch" }
];

//门禁类型
export const cardDoorType = [
	{ label: "大门", value: "bigGate" },
	{ label: "小门", value: "smallGate" }
];

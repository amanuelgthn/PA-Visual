export interface GeneralSettingsType {
  siteName: string
  siteDescription: string
  adminEmail: string
  password?: string
}

export interface AppearanceSettingsType {
  theme: string
  primaryColor: string
  secondaryColor: string
}

export interface SecuritySettingsType {
  twoFactorAuthEnabled: boolean
  sessionTimeout: number
}

export interface NotificationSettingsType {
  emailNotificationsEnabled: boolean
  pushNotificationsEnabled: boolean
}

export interface SettingsType {
  general: GeneralSettingsType
  appearance: AppearanceSettingsType
  security: SecuritySettingsType
  notification: NotificationSettingsType
}

import { PluginSettingTab, App, Setting } from "obsidian";
import IconFolderYaml from "./main";
import i18next from "i18next";
export class IconFolderYamlSettingsTab extends PluginSettingTab {
	plugin: IconFolderYaml;
	constructor(app: App, plugin: IconFolderYaml) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display(): void {
		let { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h2", { text: "Settings for my awesome plugin." });
		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your secret")
					.setValue("")
					.onChange(async (value) => {
						console.log("Secret: " + value);
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					})
			);
	}
}

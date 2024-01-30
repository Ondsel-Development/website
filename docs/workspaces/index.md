---
title: Workspaces
description: Managing workspaces in Ondsel Lens
---

## Basics

Workspaces are a collection of files organized in directories. These files can be accessed by one or more people depending on administrative settings.

Every workspace is owned by an organization, therefore, just like with organizations, there are three types of workspaces: personal, open, and private.

**Personal** workspace is the one created for every user by default. It cannot be marked as open, renamed, deleted, or provided access to for another user.

**Open** workspace is the one that is marked open (see below). It is visible to all users, including anonymous ones. Files in an open workspace are read-only and can be downloaded by everybody. Write access requires membership in the owning organization/workspace and write permission.

**Private** workspace is not marked as open in visibility settings (see below). It isn't visible to anybody except members of an organization that the workspace is owned by. Write access also requires membership in the owning organization/workspace and write permission.

## Navigating workspaces

TODO

## Managing workspaces

## Creating a new workspace

From a list of workspaces in an organization click "CREATE NEW WORKSPACE" on top right.

In the newly opened dialog enter the name of the organization, its description, and the reference name that will be used to create the workspace name in the URL (previewed in the box at the bottom).

Click "CREATE" to finalize creating a new workspaces. The new workspace will be created and displayed in the list of available workspaces.

## Managing a workspace

### Files and directories

Inside a workspace, you can organize files into directories. To do so, click "CREATE DIRECTORY", name the directory in a newly opened dialog and press Enter or click "CREATE" to confirm directory creation. Single-click the directory and then click "ADD NEW FILE" to upload a file. All file types are supported, but mesh will be generated only for FCStd and OBJ files.

To delete a file, click it to open, then click the "DELETE FILE" button above the preview area.

To delete a directory, click it to open, then click the "DELETE DIRECTORY" button above.

:::danger

Neither single deleted files, nor entire directories along with all files inside them can be recovered!

:::

For information on managing versions, please see the [Versions](/docs/versions/) section of the documentation.

### Workspaces settings

Settings of a workspaces can be accessed in two ways:

- **From the list of workspaces** available in an organization, click the gear icon to the right of the workspaces's name.
- **Inside a workspace**, click the the gear icon to the right of the workspaces's name at the top.

There are three parts of workspace settings: general settings, access control for single users, access control for groups.

General settings:

- **Name**. This is the displayed name of the workspace. To change the name of the workspace, click "CHANGE NAME", submit new name, then click "CHANGE" to confirm.
- **Slug**. This is the publicly-visible part of the workspace's URL. Once it has been created, it cannot be changed.
- **Open to Public View**. This setting controls visibility of files in the workspace. For Peer and Enterprise tiers, all workspaces default to 'false', so all files are not publicly visible or accessible by default. Click "CHANGE VISIBILITY" to change this setting, select the other option, then click "CHANGE" to confirm.
- **Share License (if any)**. This allows setting a license to files in the entire workspaces, both existing and future ones. Lens defaults to not specifying a license, which means other users will have to contact the owner for clarification. Alternatively, as a workspace administrator you can choose of Creative Commons licenses or assign "All Rights reserved". To do so, click "CHANGE LICENSE", select a different option, then click "CHANGE" to confirm.
- **Short description**. This is the displayed description of the workspaces. To change the description of the workspace, click "CHANGE DESCRIPTION", submit new description, then click "CHANGE" to confirm.

Controlling access of single users and groups is not available at this time.

### Deleting a workspace

Currently, workspaces cannot be deleted.